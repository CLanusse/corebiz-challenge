import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'; // BS for Swal
import './App.scss'
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer";
import { Banner } from "./components/Banner/Banner";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <Provider store={store}>
      <>
        <NavBar/>
        <Banner/>
        <ProductsContainer/>
        <Newsletter/>
        <Footer/>
      </>
    </Provider>
  );
}

export default App;
