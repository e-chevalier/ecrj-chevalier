
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import OrderListContainer from './components/OrderListContainer/OrderListContainer';

function App() {

  const greeting = '¡Buenos días! Que tenga una excelente compra.';
  
  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={greeting} />} />
          <Route path='category/:kind' element={<ItemListContainer greeting={greeting} />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />} />
          <Route path='orders/:userId' element={<OrderListContainer />} />
          <Route path="*" element={<main className="text-center my-5 py-5"> <p>No hay nada aquí!</p> </main>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
