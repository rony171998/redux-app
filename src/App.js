import { HashRouter, Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail';
import Characters from './components/Characters';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInput from './components/UserInput';
import './styles.css';

const App = () => {
  return (
    <HashRouter>
      <div className='container mt-5'>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<UserInput />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetail />}  />
          </Route>
          
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
