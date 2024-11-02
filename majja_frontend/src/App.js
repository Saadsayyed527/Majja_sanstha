import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Signup/signup';
import Login from './Components/LoginSignup/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
