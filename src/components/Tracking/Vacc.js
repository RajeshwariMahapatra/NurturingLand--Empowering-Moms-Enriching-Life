import React, { useState } from 'react';
import './Vacc.css';

const vaccines = [
  {
    age: '0',
    name: 'BCG (Bacillus Calmette-Guérin)',
    duration: 'Within a few days of being born and up to six months old',
  },
  {
    age: '4 weeks',
    name: 'OPV1, Pentavalent-1',
    duration: '6 weeks, 10 weeks, and 14 weeks',
  },
  {
    age: '9 weeks',
    name: 'OPV-2, Pentavalent-2, RVV-2',
    duration: '6 weeks, 10 weeks, and 14 weeks',
  },
  {
    age: '147 weeks',
    name: 'MCV, PCV-booster',
    duration: '9-12 months',
  },
];

function calculateAgeFromDateOfBirth(dateOfBirth) {
  // Get the current date
  const currentDate = new Date();

  // Parse the entered DOB
  const dob = new Date(dateOfBirth);

  // Calculate the difference in milliseconds between the current date and DOB
  const ageInMilliseconds = currentDate - dob;

  // Calculate the age in weeks, considering 7 days per week
  const ageInWeeks = ageInMilliseconds / (7 * 24 * 60 * 60 * 1000);

  // Round to the nearest week
  return Math.round(ageInWeeks);
}

function formatDateToMonthHalf(date) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
}

function Vacc() {
  const [dateOfBirth, setDateOfBirth] = useState(''); // State to store date of birth
  const [childAgeInWeeks, setChildAgeInWeeks] = useState(null); // State to store child's age in weeks
  const [selectedVaccines, setSelectedVaccines] = useState({}); // State to store selected vaccines with dates

  // Function to calculate child's age when the date of birth changes
  const handleDateOfBirthChange = (event) => {
    const enteredDateOfBirth = event.target.value;
    setDateOfBirth(enteredDateOfBirth);
    const ageInWeeks = calculateAgeFromDateOfBirth(enteredDateOfBirth);
    setChildAgeInWeeks(ageInWeeks);
  };

  // Handle checkbox change for vaccine selection
  const handleVaccineChange = (vaccineName) => {
    setSelectedVaccines((prevSelectedVaccines) => {
      const updatedSelectedVaccines = { ...prevSelectedVaccines };
      const currentDate = new Date();
      const formattedDate = formatDateToMonthHalf(currentDate);
      if (updatedSelectedVaccines[vaccineName]) {
        delete updatedSelectedVaccines[vaccineName];
      } else {
        updatedSelectedVaccines[vaccineName] = formattedDate;
      }
      return updatedSelectedVaccines;
    });
  };

  const vaccineRows = [];
  vaccines.forEach((vaccine) => {
    const ageRange = vaccine.age.split(', '); // Split the age field by comma and space
    const names = vaccine.name.split(', '); // Split the name field by comma and space

    // Create a row for each age and name combination
    ageRange.forEach((age) => {
      names.forEach((name) => {
        const minAge = parseInt(age); // Minimum age
        const maxAge = minAge; // Maximum age (since there's only one age in each range)

        if (
          childAgeInWeeks !== null &&
          childAgeInWeeks >= minAge &&
          childAgeInWeeks <= maxAge
        ) {
          vaccineRows.push(
            <tr key={`${name}-${minAge}`}>
              <td>{name}</td>
              <td>{minAge} weeks</td>
              <td className="status">
                <div className="checkbox-status">
                  <input
                    type="checkbox"
                    checked={selectedVaccines.hasOwnProperty(name)}
                    onChange={() => handleVaccineChange(name)}
                  />
                  {selectedVaccines[name] ? (
                    <span>Done on {selectedVaccines[name]}</span>
                  ) : (
                    <span>Not done</span>
                  )}
                </div>
              </td>
            </tr>
          );
        }
      });
    });
  });

  // Add a default row for "Polio" with 2 weeks if no matching age is found
  if (childAgeInWeeks !== null && vaccineRows.length === 0) {
    vaccineRows.push(
      <tr key="Polio-2">
        <td>Polio</td>
        <td>2 weeks</td>
        <td className="status">
          <div className="checkbox-status">
            <input
              type="checkbox"
              checked={selectedVaccines.hasOwnProperty('Polio')}
              onChange={() => handleVaccineChange('Polio')}
            />
            {selectedVaccines['Polio'] ? (
              <span>Done on {selectedVaccines['Polio']}</span>
            ) : (
              <span>Not done</span>
            )}
          </div>
        </td>
      </tr>
    );
  }

  // Create an array of selected vaccines for display
  const selectedVaccineList = Object.keys(selectedVaccines);

  return (
    <div className="vaccine-tracker">
      <h1 className="bhashan">Vaccine Tracker</h1>
      <p>Baby's First Defense: Vaccine Tracking Made Easy"</p>
      <div className="date-of-birth-input">
        <label htmlFor="dateOfBirth">Enter Child's Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
        />
      </div>
      <div>
        {childAgeInWeeks !== null && (
          <p>Child's Age: {childAgeInWeeks} weeks</p>
        )}
      </div>
      <div className='Full'>
      <div className="age-table-container">
        <table>
          <thead>
            <tr>
              <th>Vaccine Name</th>
          
              <th>Approx Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{vaccineRows}</tbody>
        </table>
      </div>
      <div className="selected-vaccines">
 
  <table>
    <thead>
    <tr>
              <th >Guarded and Ready!</th>
              
            </tr>
    <tr>
              <th >Vaccine Name</th>
              
            </tr>
    </thead>
    <tbody>
      {selectedVaccineList.map((vaccineName) => (
        <tr key={vaccineName}>
          <td>{vaccineName}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>

  );
}

export default Vacc;