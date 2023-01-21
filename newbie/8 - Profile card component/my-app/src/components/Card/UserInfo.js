import styled from "styled-components";

const Wrapper = styled.div`
    background-color: transparent;
    margin-top: 54px;
`;
const WrapperNameAge = styled.div`
    background-color: transparent;
    display: flex;
    margin-left: 96px;
`;
const Name = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #2E3349;
`;
const Age = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #6B7082;
    margin-left: 8px;
`;
const City = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #6B7082;
    margin: 0;
    margin-top: -10px;
`;
const Line = styled.hr`
  color: #E8E9EC;
  border-top: 1px solid;
  margin-top: 24px;
  margin-bottom: 0;
  padding-bottom: 0;
`;
function UserInfo() {
    return (    
        <>
            <Wrapper>

                <WrapperNameAge>
                    <Name>Victor Crest</Name>
                    <Age>26</Age>
                </WrapperNameAge>

                <City>
                    London
                </City>

            </Wrapper>
            <Line />
        </>
    )
}

export default UserInfo;