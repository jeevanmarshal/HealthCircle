import { useState } from "react";

import Header from '../components/MedicineManagement/Header';
import Table from '../components/MedicineManagement/Table';
import Modal from '../components/MedicineManagement/Modal';
import { addMedicine, getMedicines, updateMedicine, deleteMedicine } from '../services/medicineService';


export default function MedicinePage() {
    const [showModal, setShowModal] = useState(false);
    const [medicines, setMedicines] = useState([]);


    const fetchMedicines = async () => {
        try{
        const res = await getMedicines();
        setMedicines(res.data);
        }
        catch(error){
            console.log(error)
        }
    }
    // Dummy data for now
    const medicine = [
        { id: 1, name: "Vitamin C", dosage: "500mg", time: "9:00 AM", days: "Daily" },
        { id: 2, name: "BP Tablet", dosage: "250mg", time: "7:00 PM", days: "Daily" },
    ];

    return (
        <div className="mt-8 w-[100%] p-3 flex lg:flex md:flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
            <Header setShowModal={setShowModal} />
            <Table medicine={medicine} showModal={showModal} setShowModal={setShowModal} getMedicines={getMedicines} updateMedicine={updateMedicine} deleteMedicine={deleteMedicine} addMedicine={addMedicine} />
            <Modal showModal={showModal} medicine={medicine} setShowModal={setShowModal} addMedicine={addMedicine} getMedicines={getMedicines} />
        </div>
    );
};
