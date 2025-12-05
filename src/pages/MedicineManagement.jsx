import { useState, useEffect } from "react";
import Header from "../components/MedicineManagement/Header";
import Table from "../components/MedicineManagement/Table";
import Modal from "../components/MedicineManagement/Modal";
import Editmodal from "../components/MedicineManagement/Editmodal";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

import {
  addMedicine,
  getMedicines,
  updateMedicine,
  deleteMedicine,
} from "../services/medicineService";

export default function MedicinePage() {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [medicines, setMedicines] = useState([{ name: "jkhfk", dosage: "lkf", time: "4.00 PM", days: "aa" }]);

  const [selectedData, setSelectedData] = useState(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchMedicines();
  }, []);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 2500);
  };

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const res = await getMedicines();
      setMedicines(res.data);
    } catch (error) {
      showAlert("error", "Failed to fetch medicines");
    }
    setLoading(false);
  };

  return (
    <div className="mt-8 w-full p-3 flex flex-col gap-2">

      {loading && <Loader />}
      <Alert type={alert.type} message={alert.message} />

      <Header setShowModal={setShowModal} />

      <Table
        medicines={medicines}
        setSelectedData={setSelectedData}
        setEditModal={setEditModal}
        deleteMedicine={deleteMedicine}
        fetchMedicines={fetchMedicines}
        deletemedicine={async (id) => {
          setLoading(true);
          try {
            await deleteMedicine(id);
            showAlert("success", "Medicine deleted");
            await fetchMedicines();
          } catch (err) {
            showAlert("error", "Delete failed");
          } finally {
            setLoading(false);
          }
        }}
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addMedicine={async (data) => {
                  setLoading(true);
                  setShowModal(false);
                  try {
                    await addMedicine(data);
                    showAlert("success", "Medicine added");
                    await fetchMedicines();
                  } catch (err) {
                    showAlert("error", "Failed to add medicine");
                  } finally {
                    setLoading(false);
                  }
                }}
      />

      <Editmodal
        editModal={editModal}
        setEditModal={setEditModal}
        selectedData={selectedData}
        updateMedicine={async (id, data) => {
                  setLoading(true);
                 setEditModal(false) 
                  try {
                    await updateMedicine(id, data);
                    showAlert("success", "Medicine updated");
                    await fetchMedicines();
                  } catch (err) {
                    showAlert("error", "Update failed");
                  } finally {
                    setLoading(false);
                  }
                }}
      />
    </div>
  );
}
