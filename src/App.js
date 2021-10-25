import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
