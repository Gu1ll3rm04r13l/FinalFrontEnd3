
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/utils/Routes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
