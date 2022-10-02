import styled from 'styled-components';
import {ReactComponent as bed} from '../../assets/icons/bed.svg';
import {ReactComponent as bath} from '../../assets/icons/bath.svg';
import {ReactComponent as garage} from '../../assets/icons/garage.svg';
import {ReactComponent as scf} from '../../assets/icons/scf.svg';
import {ReactComponent as heart} from '../../assets/icons/heart.svg';

const Container = styled.div`
width: 380px;
height: 429px;
filter: drop-shadow(0px 20px 38px  rgba(0,0,0,0.06))
drop-shadow(0px 7px 46px rgba(0,0,0,0.06))
drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
margin: 100px;
box-sizing: border-box;


`;
const Img =styled.img`
width: 100%;
max-height:220px;

`;

const Content = styled.div`
display: flex;
flex-direction: ${({footer}) =>(footer ? 'row' : 'column')};
justify-content:  ${({footer}) =>(footer &&'space-between')};
padding: 16px 30px;
padding-left: 24px;
background: white;
`;

const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 16px;
`;
Details.Item = styled.div`
display: flex;
flex-direction: column;
align-items:${({footer}) => !footer && 'center'} ;
`;

const Icons = styled.div`
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Scf = styled(scf)``;
Icons.Heart=styled(heart)`
width: 35px;
height: 35px;
padding: 6px;
background: whitesmoke;
margin-top:10px;
cursor: pointer;
border-radius: 50%;
:active{
    transform:scale(0.9);
}
`;

const Divider = styled.div`
border-top: 1px solid #e6e9ec;
height: 1px;
width: 100%;
`;

export {Container,Img, Content,Details,Icons, Divider};