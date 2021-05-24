import "./App.css";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import About from "./components/About/About";
import OfferItem from "./components/OfferItem/OfferItem";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <WelcomeScreen />
      <About />
      <Slider
        amountOfItemsOnSlide={1}
        showArrows={true}
        showDots={true}
        autoPlay={false}
        autoPlaySpeed={5000}
      >
        <OfferItem typeOfPlan={"free"} />
        <OfferItem typeOfPlan={"premium"} />
        <OfferItem typeOfPlan={"enterprice"} />
      </Slider>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
