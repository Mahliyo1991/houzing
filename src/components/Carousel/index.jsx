import React, {useRef} from 'react';
import { Container, Arrow, Img, Blur, Content } from './style';
import {Carousel} from 'antd';
import img1  from '../../assets/imgs/house.png';
import img2  from '../../assets/imgs/house1.png';
import img3  from '../../assets/imgs/house2.png';





export const GenCarousel = () => { 
const slider = useRef()


    const onChange = (currentSlide) =>{
        console.log(currentSlide);
    };

    const onMove = ({target:{dataset:{ name }}}) => {;
    if( name ==='right') slider.current.next();
    if (name === 'left') slider.current.prev();}
  return (
    <Container>
       
    <Carousel ref={slider} afterChange={onChange}>
<Img src={img1} />
<Img src={img2} />
<Img src={img3} />
    </Carousel>
    <Blur />
    <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>18102 Talavera Ridge San Antonio TX</Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
    </Content>
    
    <Arrow onClick={onMove} data-name='left'  left='true'/>
<Arrow onClick={onMove} data-name='right' />
    </Container>
  )
};export default GenCarousel;
