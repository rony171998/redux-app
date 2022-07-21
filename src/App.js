import { HashRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from "./pages/PokemonDetail"
import Pokedes from "./pages/Pokedes"
import ProtectedRoutes from './components/ProtectedRoutes';
import { UserInput } from './pages';

const App = () => {
  return (
    
    <HashRouter >
      <div className='container mt-5' >
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route element={<ProtectedRoutes/>}>
              <Route path="/pokedes" element={<Pokedes />} />
              <Route path="/pokedes/:id" element={<PokemonDetail />}  />
          </Route>
          
        </Routes>
      </div>
    </HashRouter>
    
  );
};

export default App;
