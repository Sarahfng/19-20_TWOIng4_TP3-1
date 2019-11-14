import React from 'react';
import ReactDOM from 'react-dom';
import ButtonNavBar from "./ButtonNavBar";
import DataBase from "./DataBase";
import { Button } from 'reactstrap';
import './NavBar.css';
import Card from "./Card";

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
        this.state={profils : this.props.profils, personCo: 0};
    }

    handleChangePerson1 = (event) => {
        console.log(this.state.profils[0].logged);
        this.setState({logged: true});

    }


    render(){
        return(
            <div className="NavBarButton" >
                <Button outline color="secondary" size="lg" className="float right" onClick={this.handleChangePerson1}>{this.state.profils[0].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg"  className="float right" onClick={this.handleChange} value="2">{this.state.profils[1].prenom}</Button>{' '}
                <Button outline color="secondary" size="lg"  className="float right" onClick={this.handleChange} value="3">{this.state.profils[2].prenom}</Button>{' '}
            </div>

        )
    }
}

export default NavBar;