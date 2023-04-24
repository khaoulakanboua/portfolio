import React from 'react'; 
import { Card } from 'primereact/card';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


export default function Formation() {
    return (
        <div className="card">
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
            <p className="m-0" style={{fontSize:40}}>
                    BAC+5 
                </p>
                <p className="m-0">
                    Eléve Ingénieur en 4éme année en Ingénierie Informatique et Réseaux option : MIAGE
                </p>
                <p className="m-0">
                    EMSI Marrakech
                </p>
                <p className="m-0" style={{fontSize:20}}>
                    2022-2024
                </p>
          
            </Card>
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
            <p className="m-0" style={{fontSize:40}}>
                    BAC+3 
                </p>
            <p className="m-0">
                    Licence Professionnelle en Ingénierie des Systèmes Informatiques et Logiciels
                </p>
                <p className="m-0">
                    EST Essaouira
                </p>
                <p className="m-0" style={{fontSize:20}}>
                    2019-2020
                </p>
            </Card>
            <Card style={{marginTop:95,marginLeft:20,marginRight:20,textAlign:'left'}}>
            <p className="m-0" style={{fontSize:40}}>
                    BAC+2
                </p>
            <p className="m-0">
                    Diplome Universitaire de Technologie (DUT) en Ingénierie Informatique option : informatique et réseaux
                </p>
                <p className="m-0">
                    EST Essaouira
                </p>
                <p className="m-0" style={{fontSize:20}}>
                    2017-2019
                </p>
            </Card>
           
        </div>
    )
}