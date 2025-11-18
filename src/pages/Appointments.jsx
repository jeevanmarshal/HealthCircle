import React, { useState } from "react";
import Header from '../components/AppointmentTracker/Header';
import Table from '../components/AppointmentTracker/Table';
import Modal from '../components/AppointmentTracker/Modal';
export default function AppointmentTracker() {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctor: "Dr. Ravi",
            date: "2025-11-15",
            time: "10:30 AM",
            hospital: "Apollo",
            notes: "Follow-up",
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        doctor: "",
        date: "",
        time: "",
        hospital: "",
        notes: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const addAppointment = () => {
        setAppointments([
            ...appointments,
            { id: Date.now(), ...formData },
        ]);
        setModalOpen(false);
        setFormData({ doctor: "", date: "", time: "", hospital: "", notes: "" });
    };

    return (
        <div className="mt-8 w-[100%] h-full p-3 flex lg:flex md:flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
            <Header setModalOpen={setModalOpen} />
            <Table appointments={appointments} />
            <Modal addAppointment={addAppointment} formData={formData} handleChange={handleChange} setModalOpen={setModalOpen} />
        </div>
    );
}
