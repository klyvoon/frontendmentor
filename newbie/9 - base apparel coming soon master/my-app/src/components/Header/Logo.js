import styled from "styled-components";
import logo from "../../assets/logo.svg"

const Logo = styled.svg`
    margin: 31px 0px 0px 32px;
    background-image: url('${logo}');
    background-repeat: no-repeat;
    width: 100px;
    height: 21px;
    @media (min-width: 1000px) {
        margin: unset;
    
        margin-top:31px;
`;

export default Logo;