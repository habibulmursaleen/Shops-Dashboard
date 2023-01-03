import MainDashBoard from "../components/MainDashBoard/MainDashBoard";
import Sidebar from "../components/Sidebar";
import "../styles/App.css";
import Review from "./Review/Review";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashBoard />
        <Review/>
      </div>
    </div>
  );
}

export default App;
