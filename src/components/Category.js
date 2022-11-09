import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import React from 'react'

const Category = () => {
  return (
    <List>
 
<SLink to ={'/cuisine/italian'}>
    <FaPizzaSlice />
    <h4>Italian</h4>
</SLink>

<SLink to ={'/cuisine/American'}>
    <FaHamburger />
    <h4>American</h4>
</SLink>

<SLink to ={'/cuisine/Thai'}>
    <GiNoodles />
    <h4>Thai</h4>
</SLink>

<SLink to ={'/cuisine/Japanese'}>
    <GiChopsticks />
    <h4>Japanese</h4>
</SLink>

  
    </List>
  )
}

const List = styled.div`
width: 330px;
display:flex;
justify-content:center;
align-items:center;
margin:2rem 0;`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
border-radius:50%;
text-decoration: none;
background-color:#d6e4aa;
height: 4.5rem;
width: 4.5rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color:rgb(63, 63, 63);
    font-size: 0.8rem;

}
svg{
    color: rgb(63, 63, 63);
    font-size: 1.5rem;
}
&.active{
    background: linear-gradient(to right,#f27121,#e94057);
}
 ;
`

export default Category





