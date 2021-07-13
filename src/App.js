import { Router } from 'express';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  let [pokemon, setPokemon] = useState("");
  
  async function fetchPokemon() {
    let response = fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
    `)
    let data = await response.json
    setPokemon(data.pokemon)
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemon.map(poke => (
          <div key={poke.id} className="card">
            <h3>{poke.name}</h3>
            <small className="text-muted">{poke.num}</small>
            <label htmlFor="typw">type:</label>
            <ul className="list-group-flush">
                {poke.type.map(t => 
                <li key={t.index} 
                className="list-group-item">
                  {t}
                </li>)}
            </ul>
            <label htmlFor="weaknesses">weaknesses:</label>
            <ul className="list-group-flush">
                {poke.weakness.map(w => 
                <li key={w.index} 
                className="list-group-item">
                  {w}
                </li>)}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
