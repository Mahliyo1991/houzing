import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {navbar} from '../../utils/navbar';
import { Container, Link, Section, Wrapper, Logo, Main } from './style';
import logoimg from '../../assets/icons/house.svg';
import {Button} from '../Generic/Button/index';
import {Filter} from '../Filter'


export const Home = () => {
    const navigate = useNavigate();
  return (
    <Container> 
        <Main>
        <Wrapper>
<Section onClick={()=> navigate('/home')} logo><Logo src={logoimg} /> <h2 className='h1'>Houzing</h2></Section>

<Section>{navbar.map(({title, path, hidden}, index)=>{
    return !hidden && (<Link className={({isActive}) => isActive && 'active'} key={index} to={path}>{title}</Link>);
})}</Section>

<Section><Button onClick={() => navigate('/signin')}type='dark'>Sign in</Button></Section>
        </Wrapper>
        </Main>
        <Filter/>
        <Outlet/>
    </Container>

  )
}
export default Home;
