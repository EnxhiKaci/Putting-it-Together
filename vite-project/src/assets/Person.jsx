import React, { useState } from 'react';

const Person = (props) => {
    const { firstName, lastName, age, hColor } = props;
    
    const [currentAge, setCurrentAge] = useState(age);

    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    };

    return (
        <>
            <h2>{lastName}, {firstName}</h2>
            <p>Age : {currentAge}</p>
            <p>Hair Color: {hColor}</p>
            <button onClick={() => increaseAge(0)}>Birthday Button for  {firstName} {lastName} </button>
         
     </>
    );
 
}

export default Person;

