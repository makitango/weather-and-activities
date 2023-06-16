export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;

    const data = {
      name: formElements.activityName.value,
      isForGoodWeather: formElements.goodWeather.checked,
    };

    onAddActivity(data);
    form.reset();
    formElements.activityName.focus();
  }

  return (
    <div>
      <h2>Add new activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activityName">Name for activity</label>
        <input type="text" id="activityName" name="activityName" />

        <label htmlFor="goodWeather">Good weather stuff?</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
