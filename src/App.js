import './App.css';
import UserForm from "./Components/UserForm"
import FormData from './Components/FormData';
import DataDesc from './Components/DataDesc'
import { Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path='/FormData' element={<FormData/>} />
        <Route path='/DataDesc/:userId/:userName/:mobileNo/:emailId' element={<DataDesc/>}/>
      </Routes>
    </div>
  );
}

export default App;
