import MainDashBoard from "../components/MainDashBoard/MainDashBoard";
import Sidebar from "../components/Sidebar";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashBoard />
      </div>
    </div>
  );
}

export default App;
