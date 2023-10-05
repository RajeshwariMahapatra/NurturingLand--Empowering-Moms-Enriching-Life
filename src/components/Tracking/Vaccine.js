import React, { useState } from 'react';
import './Vacc.css';

const vaccines = [
    {
        age: '0 weeks',
        name: 'BCG (Bacillus Calmette-Guérin)',
        duration: 'Up to 6 months after birth',
      },
      {
        age: '0 weeks',
        name: 'Hepatitis B birth dose OPV-1 T',
        duration: 'Up to 6 months after birth',
      },
      {
        age: '0 weeks',
        name: 'Oral Polio Vaccine (OPV)-0 dose',
        duration: 'Up to 6 months after birth',
      },
      {
        age: '6 weeks',
        name: 'OPV1',
        duration: 'Up to 6 weeks after birth',
      },
      {
        age: '6 weeks',
        name: 'Pentavalent-1',
        duration: 'Up to 6 weeks after birth',
      },
      {
        age: '6 weeks',
        name: 'Rotavirus Vaccine (RVV)-1',
        duration: 'Up to 6 weeks after birth',
      },
      {
        age: '6 weeks',
        name: 'Fractional dose of Inactivated Polio Vaccine (fIPV)-1',
        duration: 'Up to 6 weeks after birth',
      },
      {
        age: '6 weeks',
        name: 'Pneumococcal Conjugate Vaccine (PCV)-1',
        duration: 'Up to 6 weeks after birth',
      },
      {
        age: '10 weeks',
        name: 'OPV-2',
        duration: 'Up to 10 weeks after birth',
      },
      {
        age: '10 weeks',
        name: 'Pentavalent-2',
        duration: 'Up to 10 weeks after birth',
      },
      {
        age: '10 weeks',
        name: 'RVV-2',
        duration: 'Up to 10 weeks after birth',
      },
      {
        age: '14 weeks',
        name: 'OPV-3',
        duration: 'Up to 14 weeks after birth',
      },
      {
        age: '14 weeks',
        name: 'Pentavalent-3',
        duration: 'Up to 14 weeks after birth',
      },
      {
        age: '14 weeks',
        name: 'fIPV-2T',
        duration: 'Up to 14 weeks after birth',
      },
      {
        age: '14 weeks',
        name: 'RVV-3',
        duration: 'Up to 14 weeks after birth',
      },
      {
        age: '14 weeks',
        name: 'PCV-2',
        duration: 'Up to 14 weeks after birth',
      },
      {
        age: '9 to 12 months',
        name: 'PCV-Booster',
        duration: 'Up to 12 months after birth',
      },
      {
        age: '9 to 12 months',
        name: 'Japanese Encephalitis (JE)-1',
        duration: 'Up to 12 months after birth',
      },
      {
        age: '9 to 12 months',
        name: 'Measles Containing vaccine (MCV)/Measles & Rubella (MR)-1',
        duration: 'Up to 12 months after birth',
      },
      {
        age: '16 to 24 months',
        name: 'Measles Containing vaccine (MCV)/MR-2',
        duration: 'Up to 24 months after birth',
      },
      {
        age: '16 to 24 months',
        name: 'Diphtheria, Pertussis & Tetanus (DPT)-Booster-1',
        duration: 'Up to 24 months after birth',
      },
      {
        age: '16 to 24 months',
        name: 'JE-2',
        duration: 'Up to 24 months after birth',
      },
      {
        age: '16 to 24 months',
        name: 'OPV Booster',
        duration: 'Up to 24 months after birth',
      },
      {
        age: '5 to 6 years',
        name: 'DPT-Booster-2',
        duration: 'Up to 6 years after birth',
      },
  ];
  
  // Example: Accessing vaccine data
  console.log(vaccines[0].name); // Output: BCG (Bacillus Calmette-Guérin)
  
function calculateAgeFromDateOfBirth(dateOfBirth) {
  // Get the current date
  const currentDate = new Date();

  // Parse the entered DOB
  const dob = new Date(dateOfBirth);

  // Calculate the difference in milliseconds between current date and DOB
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

// ... (previous code)

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
  
    return (
      <div className="vaccine-tracker">
        <h1 className="bhashan">Vaccine Tracker</h1>
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
        <div className="age-table-container">
          <table>
            <thead>
              <tr>
                <th>Vaccine Name</th>
                <th>Approx Day/Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{vaccineRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Vacc;