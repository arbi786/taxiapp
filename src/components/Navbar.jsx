import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Section>
      <div className="title">
        <h4>Hi Arbi,</h4>
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>

      <div className="search">
        <BiSearch />

        <input type="text" placeholder="Search" />
      </div>
    </Section>
  );
};


const Section=styled.section`



display:flex;
justify-content:space-between;
align-items:center;

.title{

  color:white;
  h1{

    color:white;
    span{
      color:#FFC107;
      letter-spacing:.2rem;
      font-style:italic;
      margin-left:10px;

    }

  }

 
}


.search{
  display:flex;
  
  justify-content:center;
  align-items:center;
  background:#202020;
  padding:.6rem;
  border-radius:15px;



  svg{
    color:#FFC107;
    font-size:20px;
    margin-right:10px;
    margin-left:10px;
  }

  input{
    padding:.3rem;
    background:transparent;
    border:none;

    letter-spacing:10px;
    color:#FFC107;
    &::placeholder{
      color:#FFC107;
    }

    &:focus{
      outline:none;
    }


  }
  
}







`




export default Navbar;
