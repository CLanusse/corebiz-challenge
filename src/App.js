import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css'; // BS for Swal
import './App.scss'
import Swal from "sweetalert2";

export const customSwal = Swal.mixin({ // mixin para Sweet Alert
  customClass: {
      title: 'swal-title',
      confirmButton: 'swal-button-text'
  }
})

function App() {

  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
