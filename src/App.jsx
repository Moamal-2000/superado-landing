import BigCard from "./Components/BigCard/BigCard";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
        </div>

        <Introduction />

        <div className="container">
          <Features />
          <BigCard />
        </div>
      </div>
    </>
  );
}

export default App;
