import './App.css'
import NavBar from './components/NavBar';
import CartW from './components/CartW';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar CartW={<CartW />} />
      <ItemListContainer 
      Title="Aqui van aparecer los productos"/>
      <ItemListContainer
      Title="Oferta del dia"/>
      <ItemListContainer
      Title="Mas Vendidos"/>
    </>
  );
}

export default App;
