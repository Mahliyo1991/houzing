import React from 'react';
import {Container, Content, Details, Divider,  Icons, Img} from './style';
import noimg from '../../assets/imgs/img.jpg';




export const HouseCard = ({url,title,bed,bath,garage,scf,info}) => {
    return(
         <Container>
<Img src={ url || noimg}/>
<Content>
<div className='subTitle'>{ title || 'New Apartments Nice View'}</div>
<div className='info'>{ info || 'Quincy St Brooklyn,NY,USA'}</div>
<Details>
    <Details.Item><Icons.Bed/>
    <div className="info">Bed { bed || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Bath/>
    <div className="info">Bath { bath || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Garage/>
    <div className="info">Garage { garage || 0}</div>
    </Details.Item>
    <Details.Item><Icons.Scf/>
    <div className="info">2,500 sc ft {scf || 0}</div>
    </Details.Item>
</Details>
</Content>
<Divider/>
<Content footer>
    <Details.Item footer>
        <div className="info">$2,800/mo</div>
        <div className="subTitle">$7,500/mo</div>
    </Details.Item>
    <Details.Item>
        <Icons.Heart/>
    </Details.Item>
</Content>
    </Container>
    );
};

export default HouseCard;