import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {useNavigate} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


export default function BasicDemo() {
    const navigate = useNavigate();

    const items = [
        {label: 'Acceuil',command: () => {navigate('/') }},
        {label: 'Formations',command: () => {navigate('/Formation') }},
        {label: 'Experiences',command: () => {navigate('/Experience ') }},
        {label: 'Projets',command: () => {navigate('/Projet ') }},
        {label: 'Certifications',command: () => {navigate('/Certificat ') }}
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <div className="card">
                        <TabMenu model={items} />
                    </div>
                </Col>
            </Row>
        </Container> 
    )
}
