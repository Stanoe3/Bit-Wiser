import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"

function App() {
  const navbar_items = ["BitWiser", "Exercises", "My Account"]
  return (
    <div className="App">
      <div className="page-container">
        <Navbar items={ navbar_items }/>
      </div>
      
    </div>
  );
}

export default App;
