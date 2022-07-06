import '../CSS/Home.css';
import Card from './Card.js';

function Home() {
  return (
    <div className="Body">
      <div className="Main">
        <header className="Header">
          <h1> PokeCards </h1>
        </header>
        <div className="SearchBar">
          <input type="text" className="SearchText" placeholder="Pokemon ID/Name"/>
          <button className="SearchButton">Go</button>
        </div>
        <Card PokeName="Bulbasaur" PokeImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
      </div>
      <footer className="Footer">©Shivam Chhapola</footer>
    </div>
  );
}

export default Home;
