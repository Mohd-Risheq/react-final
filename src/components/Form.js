import "../styles/Form.css"
import { useState,useEffect } from "react";

function Form() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [guests, setGuests] = useState("");
  const [occasion,setOccasion] = useState("occasion");
  useEffect(() => {
    const timeOptions = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22"00',
    ];
    setAvailableTimes(timeOptions);
  }, []);
  const getIsFormValid = () => {
    return (
      date &&
      time &&
      guests &&
      occasion !== "occasion"
    );
  };
  const clearForm = () => {
    setDate("");
    setTime("");
    setguests("");
    setOccasion("occasion");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booked !");
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Reserve</h2>
        <div className="field">
            <label for="date">
              Choose Date:
            </label>
            <input
              id="date"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="field">
            <label for="time">
              Choose Time:
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) =>
              setTime(e.target.value)}>
                {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
        </div>
        <div className="field">
          <label for="guests">
            Number Of Guests:
          </label>
          <input
            type="number"
            placeholder="Guists"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="field">
          <label for="occasion">
            Select Occasion:
          </label>
          <select
              id="occasion"
              value={occasion}
              onChange={(e) =>
              setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
            Reserve
          </button>
      </fieldset>
    </form>
  );
}

export default Form;
