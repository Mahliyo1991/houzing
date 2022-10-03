import React from 'react';
import {Container, Content, Details, Divider,  Icons, Img} from './style';
import noimg from '../../assets/imgs/img.jpg';




export const HouseCard = ({data ={}}) => {

    const {houseDetails,address,city, attachments,salePrice,price,country,description} = data;
    
    return(
        
         <Container>
<Img src={attachments && attachments[0]?.imgPath || noimg}/>
<Content>
<div className='subTitle inline'>{ city }, {country}, {description}</div>
<div className='info'>{ address || 'Quincy St Brooklyn,NY,USA'}</div>
<Details>
    <Details.Item><Icons.Bed/>
    <div className="info">Bed { houseDetails?.bed || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Bath/>
    <div className="info">Bath {houseDetails?.bath || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Garage/>
    <div className="info">Garage {houseDetails?.garage || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Scf/>
    <div className="info">Area {houseDetails?.area || 0}sqf</div>
    </Details.Item>
</Details>
</Content>
<Divider/>
<Content footer>
    <Details.Item footer>
        <div className="info">${salePrice || 0}/mo</div>
        <div className="subTitle">${price || 0}/mo</div>
    </Details.Item>
    <Details.Item row>
        <Icons.Resize/>
        <Icons.Heart/>
    </Details.Item>
</Content>
    </Container>
    );
};

export default HouseCard;