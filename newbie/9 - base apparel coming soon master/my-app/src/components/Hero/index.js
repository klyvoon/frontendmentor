import styled from "styled-components";
import img from "../../assets/hero-mobile.jpg"
import imgDesktop from "../../assets/hero-desktop.jpg"

const Hero = styled.img`
    background-image: url('${img}');
    height: 250px;
    width: 100vw;
    background-size: cover;
    @media (min-width: 1000px) {
        background-image: url('${imgDesktop}');
        position: absolute;
        right:0px;
        top: 0px;
        width: 42%;
        height: 100%;
        object-fit: cover;

  }
`;

export default Hero;
