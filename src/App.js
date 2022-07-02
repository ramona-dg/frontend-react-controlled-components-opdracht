import React from 'react';
import './App.css';

function App() {
    return (
        <>

            <form>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label>Naam: </label>
                    <input type="text"
                           name="inputUser"
                    />
                    <br/>
                    <br/>
                    <label>Leeftijd: </label>
                    <input type="text"
                           name="inputUser"
                           placeholder="0"
                    />
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>
                    <label>Opmerkingen: </label>
                    <br/>
                    <textarea id="notes" name="notes" rows="4" cols="50"
                              placeholder="Wat vond je van het recept?"/>
                    <br/>
                    <br/>
                    <input type="checkbox" checked="checked"/>
                    Schrijf me in voor de nieuwsbrief
                    <br/>
                    <br/>
                    <button>Versturen</button>
                </fieldset>
            </form>


        </>
    );
}

export default App;
