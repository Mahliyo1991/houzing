import styled from "styled-components";
import {NavLink} from 'react-router-dom'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: var(--colorPrimary);

`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding: var(--padding);
height: 64px;
font-size: 16px;
width: 100%;
max-width: 1440px;
`;



 const Section =styled.div`
 display: flex;
 align-items: center;
 color: white;
 cursor: pointer;
 .active{ 
   color: bisque;
 }
 `;

 const Logo =styled.img`
 width: 30px;
 margin: 12px;

 `;
 const Link = styled(NavLink)`
 text-decoration: none;
 padding: 0 32px;
 color: white;

 `;

export { Container, Wrapper, Section, Logo,Link ,Main};


