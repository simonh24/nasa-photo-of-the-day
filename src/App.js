import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [imgLink, setImgLink] = useState("")
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");

const StyledImgDiv = styled.div`
  width: 33%;
  height: 44vh;
  background: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 99%;
  height: auto;
`;

const StyledContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  flex-direction: column;
  background-color: #cc99ff;
  border-radius: 10px;
`;

const StyledBigDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5% 0;
`;

const StyledP = styled.p`
  color: white;
  font-size: 18px;
  margin: 0 5% 2% 5%;
  font-family: 'Gloria Hallelujah', cursive;
`;

const StyledH = styled.h1`
  font-family: "Amatic SC", cursive;

  ${props => props.type === "h1" ? `font-size: 36px;` : `font-size: 28px`}
`;


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=jEO61xQVaCf47CVVM7eVDyA74QXSPIZ3YpUOVaqU")
      .then(res => { 
        setImgLink(res.data.url)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
        setTitle(res.data.title)
      })
  }, [])
  return (
    <StyledBigDiv className="App">
      <StyledImgDiv className="imageDiv">
        <StyledImg src={imgLink} alt=""/>
      </StyledImgDiv>
      <StyledContentDiv>
        <StyledH type="h1">{title}</StyledH>
        <StyledH type="h3">{date}</StyledH>
        <StyledP>{explanation}</StyledP>
      </StyledContentDiv>
    </StyledBigDiv>
  );
}

export default App;
