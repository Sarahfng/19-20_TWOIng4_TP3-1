import React from 'react';
import ReactDOM from 'react-dom';
import ButtonNavBar from "./ButtonNavBar";
import DataBase from "./DataBase";
import { Button } from 'reactstrap';
import './NavBar.css';

class NavBar extends React.Component{

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
        this.state={profils : this.props.profils};
    }

    render(){
        return(
            <navbar color="light" >
                <Button outline color="secondary" size="lg">{this.state.profils[0].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg">{this.state.profils[1].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg">{this.state.profils[2].prenom}</Button>{' '}
            </navbar>

        )
    }
}

export default NavBar;