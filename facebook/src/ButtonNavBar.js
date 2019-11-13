import React from 'react';
import { Button } from 'reactstrap';

class ButtonNavBar extends React.Component{
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
        this.state={profil : this.props.profil};
    }
    render() {
        return (
            <div>
                <Button outline color="secondary">{this.state.profil.prenom}</Button>{' '}
            </div>
        );
    }
}

export default ButtonNavBar;