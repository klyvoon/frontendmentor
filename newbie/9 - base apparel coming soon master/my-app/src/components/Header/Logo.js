import styled from "styled-components";
import logo from "../../assets/logo.svg"

const Logo = styled.svg`
    margin: 31px 0px 0px 32px;
   /*  background-image: url('${logo}');
    background-repeat: no-repeat; */
   
 /*    width: 100px;
    height: 21px; */
   width: ${props => props.width};
   height: ${props => props.height};
   viewBox: ${props => props.viewBox};

`;

export default Logo;