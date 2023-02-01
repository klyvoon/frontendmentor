import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
    height: 84px;
    width: 100%;  
    @media (min-width: 1000px) {
        width: 50%;
        margin-left: 10%;
        margin-bottom: 70px;
        
  }  
`;

Header.Logo = Logo;

export default Header;




