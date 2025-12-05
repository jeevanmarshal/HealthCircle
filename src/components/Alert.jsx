export default function Alert({ type, message }) {
  if (!message) return null;

  const color =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div className={`animate-toast-enter w-[100%] md:w-[40%] lg:w-[40%] text-white text-center mx-auto px-4 py-3 rounded shadow ${color}`}>
      {message}
    </div>
  );
}
