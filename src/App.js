import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import Dish from "./Components/Pages/Dish";
import About from "./Components/Pages/About ";
import Footer from "./Components/Layout/Footer";
import Review from "./Components/Pages/Review";
import Order from "./Components/Pages/Order";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Dish />
      <About />
      <Order />
      <Review />

      <Footer />
    </>
  );
}
export default App;
