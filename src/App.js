import './App.css';
import Homepage from './Homepage';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Overview from './Overview';
import Profile from './Profile';
import Privacy from './Privacy';
import Blog from './Blog';
import Analysis from './Analysis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Overview/:user_name" element={<Overview />} />
          <Route path="/Analysis/:user_name" element={<Analysis />} />
          <Route path="/Profile/:user_name" element={<Profile />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Blog/:user_name" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
