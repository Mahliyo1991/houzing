import React, {useRef} from 'react'; 
import {Input} from '../Generic/Input';
import {Button} from '../Generic/Button';
import {Container , Icons,MenuWrapper, Section, } from './style';
import {Dropdown} from 'antd';
import {uzeReplace} from '../../hooks/useReplace';
import {useNavigate, useLocation} from 'react-router-dom';
import useSearch from '../../hooks/useSearch';


export const Filter = () => {
const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

const countryRef = useRef();
const regionRef = useRef();
const cityRef = useRef();
const zipRef = useRef();
const roomsRef=useRef();
const sizeRef = useRef();
const sortRef=useRef();
const minPriceRef = useRef();
const maxPriceRef=useRef();


const onChange = ({ target:{ name,value,placeholder }}) =>{
  
  navigate(`${location?.pathname}${uzeReplace(name,value)}`)
}

  const menu = (
  <MenuWrapper>
    <h1 className='subTitle'>Address</h1>
    <Section>
    <Input defaultValue={query.get('country')} onChange={onChange} ref={countryRef} name='country' placeholder='Country'/>
    <Input defaultValue={query.get('region')} onChange={onChange} ref={regionRef} name='region' placeholder='Region'/>
    <Input defaultValue={query.get('city')} onChange={onChange} ref={cityRef} name='city' placeholder='City'/>
    <Input defaultValue={query.get('zip_code')} onChange={onChange} ref={zipRef} name='zip_code' placeholder='Zip Code'/>
      </Section>
      <h1 className='subTitle'>Apartment Info</h1>
    <Section>
    <Input ref={roomsRef} placeholder='Rooms'/>
    <Input ref={sizeRef} placeholder='Size'/>
    <Input ref={sortRef} placeholder='Sort'/>
    </Section>
    <h1 className='subTitle'>Price</h1>
    <Section>
    <Input ref={minPriceRef} placeholder='Min price'/>
    <Input ref={maxPriceRef} placeholder='Max price'/>
    </Section>
    
    <Section footer>
      <Button type='light'>Cancel</Button>
      <Button>Submit</Button>
    </Section>
  </MenuWrapper>
  );
  return (
    <Container>
      <Input
      icon={<Icons.Home />}
      placeholder='Enter an address,neighborhood,city,or Zip code'
      />
      <Dropdown 
      overlay={menu}
       placement='bottomRight' 
       arrow={{pointAtCenter:true}}
       trigger='click'>
      <div><Button type='light'> <Icons.Advanced /> Advenced</Button> </div>
      </Dropdown>
      <Button> <Icons.Search />Search</Button>
    </Container>
  )
}
export default Filter;