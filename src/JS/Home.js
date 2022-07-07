import '../CSS/Home.css';
import Card from './Card.js';
import { useState } from 'react';
import axios from 'axios';

function Home() {
  const [searchTxt, setSearchTxt] = useState("");
  const [pokemon, setPokemon] = useState(['Search', 'https://www.svgrepo.com/show/14071/search.svg', 0, 0, 0, 0, 'unknown', 0]);

  const handleSearch = e => {
    e.preventDefault();
    let cancel;
    setPokemon(['Searching...', 'https://i.gifer.com/ZKZg.gif', 0, 0, 0, 0, 'unknown', 0]);
    axios.get("https://pokeapi.co/api/v2/pokemon/" + searchTxt, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPokemon([res.data.name, res.data.sprites.other['official-artwork'].front_default, res.data.stats[0].base_stat, res.data.stats[1].base_stat, res.data.stats[2].base_stat, res.data.stats[5].base_stat, res.data.types[0].type.name, res.data.id]);
    }).catch(err => {
      setPokemon([err.response.data, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png', 0, 0, 0, 0, 'unknown', 404]);
    });

    return () => cancel();
  }

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  }

  return (
    <div className="Body">
      <div className="Main">
        <header className="Header">
          <h1> PokeCards </h1>
        </header>
        <div className="SearchBar">
          <input type="text" className="SearchText" placeholder="Pokemon ID/Name" onChange={(e) => setSearchTxt(e.target.value)} onKeyDown={(e) => handleEnterKey(e)}/>
          <button className="SearchButton" onClick={(e) => handleSearch(e)}>Go</button>
        </div>
        <Card pokemon={pokemon} />
      </div>
      <footer className="Footer">Made by <a href="https://github.com/shivamchhapola"> Shivam Chhapola</a> using <a href="https://pokeapi.co/"> PokeAPI</a></footer>
    </div>
  );
}

export default Home;
