import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import MedicineManagement from './pages/MedicineManagement'
import AppointmentTracker from './pages/Appointments'
import Reports from './pages/Reports'
import Analytics from './pages/Analytics'
import Login from './pages/login'
import SignUp from './pages/signup'
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className='w-[100%] h-[100%] pt-12 gap-2 flex gap-1'> */}
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        {/* <MedicineManagement /> */}
        {/* <AppointmentTracker /> */}
        {/* <Reports /> */}
        {/* <Analytics /> */}
      {/* </div> */}  
      <SignUp/>
{/* <Login /> */}
<Footer />
    </>
  );
}

export default App;
