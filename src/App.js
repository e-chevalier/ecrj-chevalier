import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ItemListContainer greeting="¡Buenos días! Que tenga una excelente compra."/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
