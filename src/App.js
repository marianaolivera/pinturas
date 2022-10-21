import './App.scss';
import Saludo from './components/ItemListContainer';
import Navbar from './components/NavBar';



function App() {
  return (
    <div className="App">
    
      <header className="App-header">
     <Navbar/>
     <Saludo greeting="Hola Bienvenidos"/>
     </header>
     
      
    </div>
  );
}

export default App;