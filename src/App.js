
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';

function App() {
  return <>
   {/* Routing for redirection */}
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/add-users" element={<AddUsers/>}/>
        <Route  path="/add-users/:id" element={<AddUsers/>}/>
        <Route  path="/all-users" element={<AllUsers/>}/>
         {/* wrong url redirect to all users */}
        <Route  path="*" element={<Navigate to="/all-users"/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
