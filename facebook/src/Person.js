import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Test from './tomholland.jpg';
import './Person.css';

class Person extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            id:this.props.id,
            nom: this.props.nom,
            prenom:this.props.prenom,
            date: this.props.date,
            img: this.props.img,
            like: this.props.like,
            background: this.props.background
        };*/
        this.state={profil : this.props.profil, color:"yellow"};
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] :"blue"})
    }

    render(){
    return (
        <div className="profil">
            <Card>
                <div className="infosPerson" style={{backgroundColor:this.state.color}}>
                    <img src={Test} alt="Card image cap" />
                    <CardBody>
                        <CardText >Prenom : {this.state.profil.prenom}</CardText>
                        <CardText>Nom : {this.state.profil.nom}</CardText>
                        <CardText>Date de Naissance : {this.state.profil.date}</CardText>
                        <Button onClick={this.handleChange} name="color">Change Style</Button>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
    }
};

export default Person;