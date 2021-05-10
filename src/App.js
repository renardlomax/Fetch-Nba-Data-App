import React, { useState } from "react"
import Axios from 'axios'
import './App.css';
import {Button, Container,  Card} from 'react-bootstrap';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  
 const [player, setPlayer] = useState("")
  const getStats = () => {
    Axios.get("https://www.balldontlie.io/api/v1/players").then(
      (response) => {
        console.log(response.data);
        let randomInt = getRandomInt(24)
        let position =response.data.data[randomInt].position
        let city = response.data.data[randomInt].team.city
        let firstName = response.data.data[randomInt].first_name
        let lastName = response.data.data[randomInt].last_name
        let team = response.data.data[randomInt].team.name
        setPlayer(`My name is  ${firstName} ${lastName}. My position is ${position}  and I play for the ${city}  ${team}`)
    }
    );
  };
  return (
    
    
   <div className="App"> 
    <Container >
  <Card>
    <Card.Body>
      <Card.Title>NBA Players</Card.Title>
      <Card.Text>Players Info</Card.Text>
      <Button  onClick={getStats}>NBA Player</Button>
   
   <div className= "container">
    
   </div>
   <br/>
   {player}
     
    </Card.Body>
  </Card>
  </Container>
 
   </div>
  );
}

export default App;
