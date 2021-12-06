import "./style/reset.css";
import "./style/style.css";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalForm from "./containers/ModalForm";
import Header from "./containers/Header";
import Table from "./containers/Table";
import { OrdersFilter } from './containers/Filters/OrdersFilter';
import SvgSprite from './components/Icons/SvgSprite';

const App = () => (
    <Provider store={store}>
      <ModalForm />
        <div className="main-wrapper">
            <Header />
            <OrdersFilter />
            <Table />
        </div>
        <SvgSprite />
    </Provider>
  )

export default App;
