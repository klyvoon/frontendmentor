import styled from "styled-components";

const Title = styled.div`
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 10.8254px;
    color: #CE9898;

    span {
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 42px;
        text-align: center;
        letter-spacing: 10.8254px;
        color: #423A3A;
        @media (min-width: 1000px) {
            font-family: 'Josefin Sans';
font-style: normal;
font-weight: 600;
font-size: 64px;
line-height: 71px;
/* or 111% */

letter-spacing: 17.3206px;

color: #423A3A;
        }
    }

    @media (min-width: 1000px) {
        width: 50%;
        text-align: unset;
        font-family: 'Josefin Sans';
font-style: normal;
font-weight: 300;
font-size: 64px;
line-height: 64px;
/* identical to box height, or 100% */

letter-spacing: 17.3206px;

color: #CE9898;
        
  }  
`;

export default Title;
