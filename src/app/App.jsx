import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import RouterComponent from "../routers";
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <RouterComponent />
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
