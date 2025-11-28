import { useState, useEffect } from "react";
import Modal from './Modal'
export default function Table({ medicine, getMedicines, updateMedicine, deleteMedicine, fetchMedicines, setShowModal }) {
    const [Data, setData] = useState({
        id: '',
        name: '',
        dosage: '',
        time: '',
        days: ''
    })
    //display medicines
    // fetchMedicines();

    // edit row
    //update medicines

    const handleEdit = async (m) => {
        setShowModal(true)  
        try{
        await updateMedicine(m.id, Data)
        }catch(error){
            console.log(error)
        }
        setData({
            id: m.id,
            name: m.name,
            dosage: m.dosage,
            time: m.time,
            days: m.days

        })


    }

    //delete medicines
    const handleDelete = async (id) => {
        try {
            await deleteMedicine(id);
            console.log(id)
        }
        catch (error) {
            console.log(error, id)
        }
    }


    return (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-pink-100 text-center">
                        <th className="p-3 border">No</th>
                        <th className="p-3 border">Medicine Name</th>
                        <th className="p-3 border">Dosage</th>
                        <th className="p-3 border">Time</th>
                        <th className="p-3 border">Days</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {medicine.map((m) => (
                        <tr key={m.id} className="hover:bg-pink-50">
                            <td className="p-3 border">{m.id}</td>
                            <td className="p-3 border">{m.name}</td>
                            <td className="p-3 border">{m.dosage}</td>
                            <td className="p-3 border">{m.time}</td>
                            <td className="p-3 border">{m.days}</td>
                            <td className="p-3 border flex">
                                <button className="w-[50%] mr-5" onClick={() => handleEdit(m)}>
                                    ✏️
                                </button>
                                <button className="w-[50%]" onClick={() => handleDelete(m.id)}>
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal Data={Data} />
        </div>
    )
}