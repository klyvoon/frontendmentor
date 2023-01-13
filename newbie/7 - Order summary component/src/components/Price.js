import iconMusic from '../images/icon-music.svg';
import "../css/price.css";

function Price () {
    return (
        <div className="card__price">
          <img className="card__icon-music" src={iconMusic} alt="icon-music"/>
          <div className="card__plan-wrapper">
            <h1 className="plan__title">Annual Plan</h1>
            <p className="plan__price">$59.99/year</p>
          </div>
          <a className="plan__change" href="#">Change</a>
        </div>
    );
}

export default Price;