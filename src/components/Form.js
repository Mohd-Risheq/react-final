import "../styles/Form.css"
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [name,setName] = useState("")
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("occasion");
  const handleDateChange = (date) => {
    setDate(date);
  };

  const getIsFormValid = () => {
    return (
      name &&
      date &&
      guests &&
      occasion !== "occasion"
    );
  };
  const clearForm = () => {
    setName("");
    setDate("");
    setGuests("");
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
        <h2>Book a table</h2>
        <div className="field">
          <label for="name">
            Full Name:
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              minLength={4}
              maxLength={50}
            />
        </div>
        <div className="field">
          <label for="date">
            Date & Time:
            </label>
            <DatePicker
              placeholderText="Select"
              selected={date}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="dd/MM/yyyy HH:mm"
            />
        </div>
        <div className="field">
          <label for="guests">
            Number Of Guests:
          </label>
          <input
            type="number"
            placeholder="Guests"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="field">
          <label for="occasion">
            Occasion:
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) =>
              setOccasion(e.target.value)}>
                <option disabled>Select</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button className="btn" type="submit" disabled={!getIsFormValid()}>
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
