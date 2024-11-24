import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container flex flex-col flex-1 items-center">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
