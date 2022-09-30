
import React,{forwardRef} from 'react';
import {Container, Wrapper,Icon} from './style'

export const Input = forwardRef(({type,onChange,placeholder,value,icon,defaultValue,name, width,height},
  ref )=> {
  return (
<Wrapper>
  <Icon>{icon}</Icon>
<Container 
ref={ref}
placeholder={placeholder}
name={name}
value={value}
defaultValue={defaultValue}
width={width}
height={height}
icon={icon}
 onChange={onChange} type={type}/></Wrapper>
  );
}
);
export default Input;