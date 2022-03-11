import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExerciseFeed from "./components/ExerciseFeed";

function App() {
  const navbar_items = ["BitWiser", "Exercises", "My Account"];
  let exercises = [
    {
      id: 1,
      title: "String Manipulation",
      description: "Changing those strings!",
    },
    {
      id: 2,
      title: "Math Operators",
      description: "Let's get adding!",
    },
    {
      id: 3,
      title: "Error Handling",
      description: "Handle those errors!",
    },
    {
      id: 4,
      title: "File Handling",
      description: "Handle those files",
    },
  ];
  return (
    <div className="App">
      <div className="page-container">
        <Navbar items={navbar_items} />
        <ExerciseFeed exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
