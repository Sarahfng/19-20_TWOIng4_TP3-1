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
            <div className="NavBarButton" >
                <Button outline color="secondary" size="lg" className="float right" >{this.state.profils[1].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg"  className="float right">{this.state.profils[1].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg"  className="float right">{this.state.profils[2].prenom}</Button>{' '}
            </div>

        )
    }
}

export default NavBar;