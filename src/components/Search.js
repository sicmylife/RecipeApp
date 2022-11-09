import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../App.css'



const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/searched/" + input)
  };
  return (
    <FormStyle  onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
  
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 auto;
  div {
    position: relative;
    width: 50%;
  }
  input {
    border: none;
    background-color:#d6e4aa;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    color: white;
    transform: translate(100%, -50%);
  }
`;

export default Search;
