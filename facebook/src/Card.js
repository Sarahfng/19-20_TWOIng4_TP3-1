import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./ButtonNavBar";
import Person from "./Person";
import Description from "./Description";
import './Card.css';

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
        this.state={profil : this.props.profil};
    }

    render(){
        return(
            <div className="carte">
                <Person profil={this.state.profil}/>
                <Description profil={this.state.profil}/>
            </div>
        )
    }
}

export default Card;