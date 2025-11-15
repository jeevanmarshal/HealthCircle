export default function ShortcutButtons() {
    return (
        <>        <div className="flex flex-wrap gap-3 my-4 justify-around" >
            <button className="bg-pink-500 w-[50%] lg:w-[18%] md:w-[30%] text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                + Add Medicine
            </button>
            <button className="bg-pink-500  w-[50%] lg:w-[18%] md:w-[30%] text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                + Book Appointment
            </button>
        </div>
        </>
    );
}