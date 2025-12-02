export default function Alert({ type, message }) {
  if (!message) return null;

  const color =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div className={` text-white px-4 py-2 rounded shadow ${color}`}>
      {message}
    </div>
  );
}
