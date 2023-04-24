import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./style.css";
import { Card } from 'primereact/card';

const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1080, itemsToShow: 3 },
  ];
const devops = (
    <img alt="Card" src={require('../images/pokemon.png')} style={{height:250}} />
);
const agence = (
    <img alt="Card" src={require('../images/agence.png')} style={{height:250}} />
);
const morpion = (
    <img alt="Card" src={require('../images/morpion.png')} style={{height:250}} />
);
export default function Projet() {
    
  return (
      
      <div className="App" style={{marginTop:40}}>
        <Carousel breakPoints={breakPoints} className='project-container rows'>
        <div className='project-card col-12 col-md-10 mb-4'>
        <Card header={devops} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Application Mobile 'Pokemon'
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        <a href="https://github.com/khaoulakanboua/poekemon"><h5 class="mt-0 mb-3">https://github.com/khaoulakanboua/poekemon</h5></a>
     
        </div>
        
      </Card>
      </div>
      <div className='project-card col-12 col-md-10 mb-4'>
        <Card header={agence} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Site web pour la gestion des rendez-vous
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        <a href="https://github.com/khaoulakanboua/SFE-projet-et-rapport-"><h5 class="mt-0 mb-3">https://github.com/khaoulakanboua/SFE-projet-et-rapport-</h5></a>
     
        </div>
        
      </Card>
      </div>
      <div className='project-card col-12 col-md-10 mb-4'>
        <Card header={morpion} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Jeux Morpion avec React
        </div>
        <br/>
       
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        <a href="https://github.com/khaoulakanboua/tic-tac-toe"><h5 class="mt-0 mb-3">https://github.com/khaoulakanboua/tic-tac-toe</h5></a>
     
        </div>
        
      </Card>
      </div>
      <div className='project-card col-12 col-md-10 mb-4'>
        <Card header={devops} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Front-End Web UI Frameworks ans Tools:
        Bootstrap 4
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        IBM
        
        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        date de délivrance : Décember 2022
     
        </div>
        
      </Card>
      </div>
        </Carousel>
      </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Projet />, rootElement);