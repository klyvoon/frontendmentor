import hero from '../images/illustration-hero.svg';
import "../css/hero.css";

function Hero () {
    return (
        <img className="card__img" src={hero} alt="hero-image" width="327px" height="160px"/>
    );
}

export default Hero;