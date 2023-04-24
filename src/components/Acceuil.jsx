import React from 'react'; 
import { Card } from 'primereact/card';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


export default function Acceuil() {
    return (
        <div className="card" class="row">
   
            <div className='text-center mb-4' class="col-lg-4 col-md-12 col-sm-12">
            <img alt="Card" src={require('./avatar.jpg')} className='profile-img' style={{ width:400,height:400,borderRadius:15,marginTop: 80}}/>
            </div>
            <div className='text-center mb-4' class="col-lg-7 col-md-12 col-sm-12">

            <Card style={{marginTop:95,marginLeft:20,height:350}}>
            <p className="m-0" style={{fontSize:40}}>
                KANBOUA Khaoula
                <br/>
                Eléve Ingénieur
                <br/>
                <br/>
                </p>
                <p className="m-0">
                Ingénieur en informatique et réseaux option miage (méthodes informatiques appliquées à la gestion des entreprises).
                 Passionnée par les nouvelles technologies de programmation. Rigoureuse et efficace dans les tâches confiées. 
                 Capable d'intégrer facilement dans une équipe, et de travailler avec des méthodes de l'approche agile. 
                 Calme et concentrée sur les travaux.
                </p>
                
           
                <br/>
                <br/>
                <br/>
                
                <br/>
                <br/>
            </Card>
            </div>

            
        </div>
    )
}