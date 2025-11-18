import { useState } from "react";

import Header from '../components/MedicineManagement/Header';
import Table from '../components/MedicineManagement/Table';
import Modal from '../components/MedicineManagement/Modal';

export default function MedicinePage() {
    const [showModal, setShowModal] = useState(false);

    // Dummy data for now
    const medicines = [
        { id: 1, name: "Vitamin C", dosage: "500mg", time: "9:00 AM", days: "Daily" },
        { id: 2, name: "BP Tablet", dosage: "250mg", time: "7:00 PM", days: "Daily" },
    ];

    return (
        <div className="mt-8 w-[100%] p-3 flex lg:flex md:flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
            <Header setShowModal={setShowModal} />
            <Table medicines={medicines} />
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};
