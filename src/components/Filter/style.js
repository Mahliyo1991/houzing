import styled from "styled-components";
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as home} from '../../assets/icons/home.svg';
import {ReactComponent as advanced} from '../../assets/icons/advanced.svg'

export const Container = styled.div`
display: flex;
padding: var(--padding);
padding-top: 10px ;
padding-bottom: 10px ;
gap: 20px;
`;



export const Icons = styled.div``


Icons.Search = styled(Search)` margin-right: 8px;`;
 Icons.Home = styled(home)`margin-right: 8px;`;
 Icons.Advanced = styled(advanced)`margin-right: 8px;`;

export const MenuWrapper = styled.div`
padding: 30px;
background-color: white;
border: 1px solid #e6e9ec;

`;
export const Section = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;


`; 










