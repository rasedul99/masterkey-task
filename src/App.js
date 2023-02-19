import "./App.css";
import Card from "./components/Card";
import DailyDeals from "./components/DailyDeals";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App flex ">
      {/* SideNav */}
      <div className="w-[20%] h-full bg-white">
        <SideNav />
      </div>
      {/* Rest of navbar */}
      <div className="w-[80%]">
        <Header />
        <div className="flex">
          <Card />
          <div>
            <div className="flex justify-between">
              <div>Daily Deals</div>
              <p>View All</p>
            </div>
            <DailyDeals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
