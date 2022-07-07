import '../CSS/Card.css';
import ProgressBar  from './ProgressBar';
import { ReactComponent as D1 } from '../images/Design.svg';

function Card({ pokemon }) {
  const designColor = {
    "grass": "#9EFF7B",
    "normal": "#72535B",
    "fighting": "",
    "flying":"",
    "poison":"",
    "ground":"",
    "rock":"",
    "bug":"",
    "ghost":"",
    "steel":"",
    "fire":"",
    "water":"",
    "shadow":"",
    "electric":"",
    "psychic":"",
    "ice":"",
    "dragon":"",
    "dark":"",
    "fairy":"",
    "unknown":"",
  }

  return(
    <div className="Card">
      <div className="Design">
        <D1 className="D1" fill={designColor[pokemon[6]]}/>
      </div>
      <img src={pokemon[1]} className="PokeImg" alt={pokemon[0]} />
      <div className="PokeName">{pokemon[0]}</div>
      <div className="Stats">
        <div className="Labels">
          <label htmlFor="hp" style={{ color: '#F37474' }}>hp</label>
          <label htmlFor="hp" style={{ color: '#5DB4F2' }}>atk</label>
          <label htmlFor="hp" style={{ color: '#F8A04F' }}>def</label>
          <label htmlFor="hp" style={{ color: '#D37CF1' }}>spd</label>
        </div>
        <div className="ProgressBars">
          <ProgressBar bgcolor="#F37474" stat={pokemon[2]} height="0.85rem"/>
          <ProgressBar bgcolor="#5DB4F2" stat={pokemon[3]} height="0.85rem"/>
          <ProgressBar bgcolor="#F8A04F" stat={pokemon[4]} height="0.85rem"/>
          <ProgressBar bgcolor="#D37CF1" stat={pokemon[5]} height="0.85rem"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
