import Home from './pages/home';

import Committees from './pages/committees';
import UNSC from './pages/comms/unsc';
import UNHRC from './pages/comms/unhrc';
import DISEC from './pages/comms/disec';
import LokSabha from './pages/comms/lok_sabha';
import IPC from './pages/comms/ipc';
import BoardRoom from './pages/comms/board_room';
import CCC from './pages/comms/ccc';

import Secretariat from './pages/secretariat';
import Registration from './pages/registration';

import IndividualRegistration from './pages/registrations/individual';
import DelegationRegistration from './pages/registrations/delegation';

import LoginPage from './pages/login';

import Navbar from './components/navbar';


import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/dwmun" element={<Home/>}/>
                <Route path="/committees" element={<Committees/>}/>
                <Route path="/committees/unsc" element={<UNSC/>}/>
                <Route path="/committees/unhrc" element={<UNHRC/>}/>
                <Route path="/committees/disec" element={<DISEC/>}/>
                <Route path="/committees/lok-sabha" element={<LokSabha/>}/>
                <Route path="/committees/ipc" element={<IPC/>}/>
                <Route path="/committees/committee-x" element={<BoardRoom/>}/>
                <Route path="/committees/ccc" element={<CCC/>}/>
                <Route path="/secretariat" element={<Secretariat/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/registration/individual" element={<IndividualRegistration/>}/>
                <Route path="/registration/delegation" element={<DelegationRegistration/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;
