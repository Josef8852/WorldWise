import { lazy ,Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityInfo from "./components/CityInfo";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";
import SpinnerFullPage from "./components/SpinnerFullPage";

// Lazy loading
const HomePage = lazy(() => import("./pages/HomePage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App: React.FC = () => {


  return (
    /* React Router */
    <CitiesProvider>
      <BrowserRouter>
      <Suspense fallback = {<SpinnerFullPage/>}>
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
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
