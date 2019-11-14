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
        this.state={color:"antiquewhite"};
    }

    handleChange = (event) => {
        if(this.state.color == "antiquewhite"){
            this.setState({ [event.target.name] : this.props.profil.background});
        }
        else{
            this.setState({ [event.target.name] :"antiquewhite"});
        }
    }

    render(){
        console.log(this.props.profil);
    return (
        <div className="profil">
            <Card>
                <div className="infosPerson" style={{backgroundColor:this.state.color}}>
                    <img src={Test} alt="Card image cap" />
                    <CardBody>
                        <CardText >Prenom : {this.props.profil.prenom}</CardText>
                        <CardText>Nom : {this.props.profil.nom}</CardText>
                        <CardText>Date de Naissance : {this.props.profil.date}</CardText>
                        <Button className="ButtonStyle" onClick={this.handleChange} name="color">Change Style</Button>
                    </CardBody>
                </div>
            </Card>
        </div>
    );
    }
};

export default Person;