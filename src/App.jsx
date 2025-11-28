import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MedicineManagement from "./pages/MedicineManagement";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>

//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />

//           {/* Protected Dashboard Routes */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Layout />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<Dashboard />} />
//             <Route path="medicines" element={<MedicineManagement />} />
//             <Route path="appointments" element={<Appointments />} />
//             <Route path="reports" element={<Reports />} />
//             <Route path="analytics" element={<Analytics />} />
//           </Route>

//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="medicines" element={<MedicineManagement />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="reports" element={<Reports />} />
            <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
      </BrowserRouter> 
          // <Login />

  );
}

export default App;

