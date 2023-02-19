import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-[271px] h-full bg-white ">
        <SideNav />
      </div>
    </div>
  );
}

export default App;
