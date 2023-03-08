import './App.css';
import Header from "./Componentes/Header";
import BarraDeBusqueda from './Componentes/BarraDeBusqueda';
import CategoriasSlide from './Componentes/CategoriasSlide';
import Nuevo from './Componentes/Nuevo';
import Recientes from './Componentes/Recientes';
import BottomBar from './Componentes/BottomBar';

function App() {
  return (
    <div className="App">
        <Header/>
        <BarraDeBusqueda/>
        <CategoriasSlide/>
        <Nuevo/>
        <Recientes/>
        <BottomBar/>
    </div>
  );
}

export default App;
        
