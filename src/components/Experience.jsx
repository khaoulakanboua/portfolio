import React from 'react'; 
import { Card } from 'primereact/card';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


export default function Experience() {
    return (
        <div className="card">
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
                <p className="m-0" style={{fontSize:40}}>
                    Stage PFE au sein de Génération Pub
                </p>
                <p className="m-0">
                   Réalisation d'un site web pour la gestion des rendez-vous
                </p>
                <p className="m-0">
                    Essaouira
                </p>
                <p className="m-0">
                    avril 2020 - mai 2020 (2 mois)
                </p>
          
            </Card>
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
            <p className="m-0" style={{fontSize:40}}>
                    Stage au sein de Anybox Maroc  
                </p>
            <p className="m-0">
                    Plateforme pour la gestion des iptv
                </p>
                <p className="m-0">
                    Marrakech
                </p>
                <p className="m-0">
                    janvier 2021 - février 2021 (2 mois)
                </p>
            </Card>
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
            <p className="m-0" style={{fontSize:40}}>
                Stage PFE au sein de la direction provinciale de l'agriculture 
                </p>
            <p className="m-0">
                    Réalisation d'une plateforme pour la gestion des projets 
                    <br/>
                    Réalisation d'une application de chat 
                </p>
                <p className="m-0">
                    Essaouira
                </p>
                <p className="m-0">
                mars 2019 - avril 2019 (2 mois)
                </p>
            </Card>
            
        </div>
    )
}