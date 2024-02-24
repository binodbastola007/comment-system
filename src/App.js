import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Authentication from './auth/Authentication';
import Homepage from './Home';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Authentication />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
