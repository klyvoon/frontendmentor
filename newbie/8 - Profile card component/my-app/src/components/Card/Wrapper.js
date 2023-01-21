import styled from "styled-components"

/* images */
import topBackground from '../../material/images/bg-pattern-card.svg';


const Container = styled.div`
    width: 326px;
    height: 374px;
    background-color: white;
    border-radius: 15px;
`;

const TopBackground = styled.img.attrs({
    src: topBackground
})` 
    display: block;
    width: 100%;
    height: 140px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px`;

function Wrapper(props) {
    return (
        <>  
            <Container>
                <TopBackground />
                {props.children}
            </Container>
        </>
    )
}

export default Wrapper;
