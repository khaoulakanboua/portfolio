import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certificat() {

    const devops = (
        <img alt="Card" src={require('../images/bootstrap.png')} style={{height:250}} />
    );
    const react = (
        <img alt="Card" src={require('../images/react.png')} style={{height:250}} />
    );
    const mongodb = (
        <img alt="Card" src={require('../images/mongodb.png')} style={{height:250}} />
    );
    const cloud = (
        <img alt="Card" src={require('../images/cloud.png')} style={{height:250}} />
    );
    return (
        <div className='container mt-4'>

<section className='section'>
  <div className='project-container row'>
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card header={devops} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Front-End Web UI Frameworks ans Tools:
        Bootstrap 4
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        The Hong Kong University
        
        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        date de délivrance : Décember 2022
     
        </div>
        
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card header={react} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Front-End Web Development With React
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>
        The Hong Kong University


        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
          
        <br/>
date de délivrance : janvier 2023

        </div>
        
      </Card>
    </div>
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card header={mongodb} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
        Server-side Development with Node.JS, Express and MongoDB
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
          
        The Hong Kong University


        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
          
        <br/>
date de délivrance : janvier 2023

        </div>
        
      </Card>
    </div>
    <div className='project-card col-12 col-md-4 mb-4'>
      <Card header={cloud} className="card" >
        <div className='project-title card-title h5' style={{textAlign:"left"}}>
       Devops, Cloud and Agile Foundations
        </div>
        <br/>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
          
        IBM

        </div>
        <div className='project-school card-subtitle h6' style={{textAlign:"left"}}>
        <br/>

date de délivrance : Mars 2023

        </div>
        
      </Card>
    </div>
  </div>
</section>


        </div>
    )
}

