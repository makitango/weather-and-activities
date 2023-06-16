export default function Form() {
  //   const [activityName, setActivityName] = useState("activityNameKey", {
  //     defaultValue: "",
  //   });
  //   const [goodWeatherState, setgoodWeatherState] = useState("goodWeatherKey", {
  //     defaultValue: "",
  //   });

  //   const handleActivityNameChange = (event) => {
  //     setActivityName(event.target.value);
  //   };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <h2>Add new activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activityName">Name for activity</label>
        <input
          type="text"
          id="activityName"
          name="activityName"
          //   onActivityNameChange={handleActivityNameChange}
        />

        <label htmlFor="goodWeather">Good weather stuff?</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// export default function App() {
//     const [note, setNote] = useLocalStorageState("note", { defaultValue: "" });
//     const [font, setFont] = useLocalStorageState("font", {
//       defaultValue: "system-ui",
//     });

//     function handleActivityNameChange(newActivity) {
//       setActivityName(newActivity);
//     }

//     return (
//         <Note note={note} onNoteChange={handleNoteChange} />
//     );
//   }
