import Backed from "./Components/Backed/Backed";
import BigCard from "./Components/BigCard/BigCard";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import LearnMore from "./Components/LearnMore/LearnMore";
import RoadMap from "./Components/RoadMap/RoadMap";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Introduction />

        <div className="container">
          <Features />
          <BigCard />
          <RoadMap />
          <LearnMore />
          <Backed />
        </div>
      </div>
    </>
  );
}

export default App;
