import '../CSS/Card.css';
import ProgressBar  from './ProgressBar';
import { ReactComponent as D1 } from '../images/Design.svg';

function Card({ pokemon }) {
  const designColor = {
    "grass": "#9EFF7B",
    "normal": "#C7C776",
    "fighting": "#F86C65",
    "flying":"#A890F2",
    "poison":"#DD65DD",
    "ground":"#E2C168",
    "rock":"#BCA753",
    "bug":"#C0D319",
    "ghost":"#8F71BF",
    "steel":"#B6B6D8",
    "fire":"#FBA568",
    "water":"#789EF9",
    "shadow":"#3C3C3C",
    "electric":"#FBDF6E",
    "psychic":"#FB7EA6",
    "ice":"#ADFAF8",
    "dragon":"#885BF5",
    "dark":"#615247",
    "fairy":"#D77BC2",
    "unknown":"#A7A7A7",
  }

  return(
    <div className="Card">
      <div className="Design">
        <D1 className="D1" fill={designColor[pokemon[6]]}/>
      </div>
      <img src={pokemon[1]} className="PokeImg" alt={pokemon[0]} />
      <div className="PokeID">{pokemon[7]}</div>
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
