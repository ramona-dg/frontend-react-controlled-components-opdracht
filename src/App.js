import React from 'react';
import './App.css';

function App() {

    const [valueName, setValueName] = React.useState('');
    const [valueAge, setValueAge] = React.useState(0);
    const [valueText, setValueText] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    // dit is om de pagina niet te refreshen met event.default. En te loggen in de console


    const handleSubmit = (event) => {
        const userInput = [valueName, valueAge, valueText, checkedTerms]
        // const nameInput = valueName;
        // const ageInput = valueAge;
        // const textInput = valueText;
        event.preventDefault();
        console.log(userInput);
    };

    // omdat de button onSubmit is zet je hem in de form
    return (
        <>

            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Gegevens</legend>
                    <label>Naam: </label>
                    <input type="text"
                           name="inputName"
                           value={valueName}
                           onChange={(e) => setValueName(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <label>Leeftijd: </label>
                    <input type="number"
                           name="inputAge"
                           placeholder="0"
                           value={valueAge}
                           onChange={(e) => setValueAge(e.target.value)}


                    />
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>
                    <label>Opmerkingen: </label>
                    <br/>
                    <textarea id="notes" name="notes" rows="4" cols="50"
                              placeholder="Wat vond je van het recept?"
                              value={valueText}
                              onChange={(e) => setValueText(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <input type="checkbox"
                           onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    Schrijf me in voor de nieuwsbrief
                    <br/>
                    <br/>
                    <button type="submit"
                    >Versturen
                    </button>
                </fieldset>
            </form>


        </>
    );
}

export default App;
