import "remixicon/fonts/remixicon.css";
import "./App.css";
import Book from "./Components/Book";
import Facilities from "./Components/Facilities";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Fleet from "./Components/Fleet";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Facilities />
      <Fleet />
    </>
  );
}

export default App;
