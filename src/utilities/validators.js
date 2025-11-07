
export const isRequired = (value) => value.trim() !== '';

export const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

export const isValidPassword = (password) => {
    return password.length >= 6;
};

// Form-level validation (Signup or Login)
export const validateSignup = (formData) => {
    const errors = {};
    if (!isRequired(formData.name)) {
        errors.name = 'Full name is required.';
    }

    if (!isRequired(formData.email)) {
        errors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!isRequired(formData.password)) {
        errors.password = 'Password is required.';
    } else if (!isValidPassword(formData.password)) {
        errors.password = 'Password must be at least 6 characters long.';
    }

    if (!isRequired(formData.cpassword)) {
        errors.cpassword = 'Confirm Password is required.';
    } else if (formData.password != formData.cpassword) {
        errors.cpassword = 'Password is mismatch.';
    }

    return errors;
};

// For Login form
export const validateLogin = (formData) => {
    const errors = {};

    if (!isRequired(formData.email)) {
        errors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'Invalid email address.';
    }

    if (!isRequired(formData.password)) {
        errors.password = 'Password is required.';
    }

    return errors;
};
