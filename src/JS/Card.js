import '../CSS/Card.css';
import ProgressBar  from './ProgressBar';
import { ReactComponent as D1 } from '../images/Design.svg';

function Card({PokeName, PokeImg, hp, atk, def, spd}) {
  return(
    <div className="Card">
      <div className="Design">
        <D1 className="D1" fill="#9EFF7B"/>
      </div>
      <img src={PokeImg} className="PokeImg" alt={PokeName} />
      <div className="PokeName">{PokeName}</div>
      <div className="Stats">
        <div className="Labels">
          <label htmlFor="hp" style={{ color: '#F37474' }}>hp</label>
          <label htmlFor="hp" style={{ color: '#5DB4F2' }}>atk</label>
          <label htmlFor="hp" style={{ color: '#F8A04F' }}>def</label>
          <label htmlFor="hp" style={{ color: '#D37CF1' }}>spd</label>
        </div>
        <div className="ProgressBars">
          <ProgressBar bgcolor="#F37474" stat="49" height="0.85rem"/>
          <ProgressBar bgcolor="#5DB4F2" stat="75" height="0.85rem"/>
          <ProgressBar bgcolor="#F8A04F" stat="89" height="0.85rem"/>
          <ProgressBar bgcolor="#D37CF1" stat="125" height="0.85rem"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
