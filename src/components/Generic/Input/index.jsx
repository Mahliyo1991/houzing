
import React from 'react';
import {Container} from './style'

export const Input = ({type,onChange,placeholder,value,defaultValue,name, width,height}) => {
  return (

<Container placeholder={placeholder}
name={name}
value={value}
defaultValue={defaultValue}
width={width}
height={height}
 onChange={onChange} type={type}/>
  )
};

export default Input;