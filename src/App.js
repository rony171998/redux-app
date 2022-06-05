import { HashRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from "./components/PokemonDetail"
import Pokedes from "./components/Pokedes"
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInput from './components/UserInput';
import Footer from "./footer/Footer"
import './styles.css';

const App = () => {
  document.body.style.background="pink";
  return (
    
    <HashRouter >
      <div className='container mt-5' >
        <Routes>
          <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<UserInput />} />
              <Route path="/pokedes" element={<Pokedes />} />
              <Route path="/pokedes/:id" element={<PokemonDetail />}  />
          </Route>
          
        </Routes>
        <Footer/>
      </div>
    </HashRouter>
    
  );
};

export default App;
