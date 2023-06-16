import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log(activities);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
