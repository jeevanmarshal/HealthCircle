import { useState, useEffect } from "react";
import Header from "../components/AppointmentTracker/Header";
import Table from "../components/AppointmentTracker/Table";
import Modal from "../components/AppointmentTracker/Modal";
import Editdata from "../components/AppointmentTracker/Editdata";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

import {
  getAppointments,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} from "../services/appointmentService";

export default function AppointmentTracker() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 2500);
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await getAppointments();
      setAppointments(res.data);
    } catch (err) {
      showAlert("error", "Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-full p-3 flex flex-col gap-2 text-sm lg:text-[16px] md:text-md">
      {loading && <Loader />}
      <Alert type={alert.type} message={alert.message} />

      <Header setModalOpen={setModalOpen} />

      <Table
        appointments={appointments}
        setSelectedAppointment={setSelectedAppointment}
        setEditmodal={setEditModal}
        deleteAppointment={async (id) => {
          setLoading(true);
          try {
            await deleteAppointment(id);
            showAlert("success", "Appointment deleted");
            await fetchAppointments();
          } catch (err) {
            showAlert("error", "Delete failed");
          } finally {
            setLoading(false);
          }
        }}
        fetchAppointments={fetchAppointments}
      />

      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        addAppointment={async (data) => {
          setLoading(true);
          try {
            await addAppointment(data);
            showAlert("success", "Appointment added");
            await fetchAppointments();
            setModalOpen(false);
          } catch (err) {
            showAlert("error", "Failed to add appointment");
          } finally {
            setLoading(false);
          }
        }}
      />

      <Editdata
        editModal={editModal}
        setEditmodal={setEditModal}
        selectedAppointment={selectedAppointment}
        updateAppointment={async (id, data) => {
          setLoading(true);
          try {
            await updateAppointment(id, data);
            showAlert("success", "Appointment updated");
            await fetchAppointments();
            setEditModal(false);
          } catch (err) {
            showAlert("error", "Update failed");
            setEditModal(false);
          } finally {
            setLoading(false);
          }
        }}
      />
    </div>
  );
}
