import styled from "styled-components";

const Wrapper = styled.div`
    height:40px;
    width: 233px;
    display: flex;
    background-color: red;
    margin-left: 41px;
`;
const userMetricsz = 
    {
        "Followers": "80K",
        "Likes": "803K",
        "Photos": "1.4K"
    };
const Stourt = styled.p`
    width:30px;
    height:30px;
    :nth-child(1) {
        width: 59px;
        height: 40px;
        margin: 0px;

        font-family: 'Kumbh Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #2E3349;
    }
    :nth-child(2) {
        background-color: red;
        width: 47px;
        height: 40px;
    }
    :nth-child(3) {
        background-color: red;
        width: 43px;
        height: 40px;
    }
`;
const DivWrapper = styled.div`
    :nth-child(1) {
        text-align: center;
        margin-left: 41px;
        margin-top: 24px;
        height: 59px;
    } p:nth-child(2) {
        margin: 0;
        margin-top: -16px;

        font-family: 'Kumbh Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 1.5px;
        color: #6B7082;
    }
    :nth-child(2) {
        margin-left: 38px;
        margin-top: 24px;
        width: 47px;
        height: 40px;
        p:nth-child(2) {
            margin: 0;
            margin-top: -16px;
            font-family: 'Kumbh Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            text-align: end;
            letter-spacing: 1.5px;
            color: #6B7082;
        }
    }
    :nth-child(3) {
        margin-left: 46px;
        margin-top: 24px;
        p:nth-child(2) {

            font-family: 'Kumbh Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 1.5px;
            color: #6B7082;
        }
    }
`;

const Go = Object.entries(userMetricsz).map( ([key, value]) =>
    <>
        <DivWrapper>
            <Stourt>{value}</Stourt>
            <p>{key}</p>
        </DivWrapper>
    </>
);

function SocialMetrics(props) {
    return (
        <>
            <div style={{display: "flex"}}>
                {Go}
            </div>
        </>
    )
}

export default SocialMetrics;