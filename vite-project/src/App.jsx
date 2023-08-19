import React, { useState } from 'react';
import Person from './assets/Person';

function App() {
  const [people, setPeople] = useState([
    { firstName: "Jane", lastName: "Doe", age: 45, hColor: "Black" },
    { firstName: "John", lastName: "Smith", age: 88, hColor: "Brown" }
  ]);


  return (
    <div className="center-container">
      {people.map((person, index) => (
        <Person
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hColor={person.hColor}
        />
      ))}
    </div>
  );
}

export default App;
