import Wrapper from "./Wrapper";
import Position from "./Position";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import SocialMetrics from "./SocialMetrics";

function Card() {
    return( 
    <>
        <Position>
                <Wrapper>
                    <Avatar />
                    <UserInfo />
                    <SocialMetrics/>
                </Wrapper>
        </Position> 
    </>
    )    
}


export default Card;

