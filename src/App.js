
import './App.css';
import Home from './components/Home/Home';
import Indivisual from './components/Indivisual/Indivisual';
import Team from './components/Team/Team';
import {Route,Routes,Switch} from 'react-router-dom'
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/team"  element={<Team/>}/>
        <Route path="/indi"  element={<Indivisual/>}/>
        <Route path="/profile"  element={<Profile/>}/>
    </Routes> 
    </div>
  );
}

export default App;
