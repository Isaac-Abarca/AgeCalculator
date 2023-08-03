import{ useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const inputDate = parseInt(date);
    const inputMonth = parseInt(month);
    const inputYear = parseInt(year);
    
    // Validaciones
    if (inputDate < 1 || inputDate > 31 || inputMonth < 1 || inputMonth > 12 || inputYear < 1900 || inputYear > 2500) {
      alert("Por favor, ingresa valores válidos para la fecha, el mes y el año.");
      return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let years = currentYear - inputYear;
    let months = currentMonth - inputMonth;
    let days = currentDay - inputDate;

    if (days < 0) {
      months--;
      days += new Date(inputYear, inputMonth - 1, 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years,
      months,
      days,
    });
  };

  return (
    <>
      <div className="card">
        <h1 className="title">Age Calculator</h1>
        <div className="container">
          <div className="container-date">
            <h2>Date</h2>
            <input
              className="input"
              type="number"
              name="Date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="container-month">
            <h2>Month</h2>
            <input
              className="input"
              type="number"
              name="Month"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="container-year">
            <h2>Year</h2>
            <input
              className="input"
              type="number"
              name="Year"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <button className="btn-calculate" onClick={calculateAge}>
          Calcular
        </button>
        {age && (
        <p className="read-the-docs">
          Tu edad es: {age.years} años, {age.months} meses y {age.days} días.
        </p>
      )}
      </div>
      
    </>
  );
}

export default App;

