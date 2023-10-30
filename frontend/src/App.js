import {BrowserRouter , Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Loader/>
       <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
            
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;
