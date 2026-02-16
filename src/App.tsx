import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityInfo from "./components/CityInfo";
import PageNotFound from "./pages/PageNotFound";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";


const App: React.FC = () => {


  return (
    /* React Router */
    <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/app" element={<AppLayout />}>   {/* NESTED ROUTES */}
        
          {/* Index Route -> Default Route */} 

          <Route path="cities" element={<CityList />} />

          <Route path="cities/:id" element={<CityInfo />} />    {/* Route params */}
       
          <Route path="countries" element={<CountryList />} />

          <Route path='form' element={<Form/>}/>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
