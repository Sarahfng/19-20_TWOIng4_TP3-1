import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./ButtonNavBar";
import Person from "./Person";
import Description from "./Description";
import './Card.css';
import DataBase from "./DataBase";

class Card extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            id:this.props.profil.id,
            nom: this.props.profil.nom,
            prenom:this.props.profil.prenom,
            date: this.props.profil.date,
            img: this.props.profil.img,
            like: this.props.profil.like,
            background: this.props.profil.background
        };*/
    }

    render(){

        return(
            <div className="carte">
                <Person profil={this.props.profil}/>
                <Description profil={this.props.profil}/>
            </div>
        )
    }
}

export default Card;