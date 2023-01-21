import styled from "styled-components";
import photo from "../../material/images/Oval2.svg";

const ImageContainer = styled.div`
        background-color: green;
        width: 96px;
        height: 96px;
        position: absolute;
        border-radius: 50%;
        margin: 92px 115px 0px;
        top: 170px;
        outline: 5px solid white;
        background-image: url(${photo});
    `;

function Avatar(props) {
    return(
        <>
            <ImageContainer />
        </>
    )
    
}

export default Avatar;