import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      <div className='w-[100%] h-[100%] pt-12 gap-3 border flex gap-1'>
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
