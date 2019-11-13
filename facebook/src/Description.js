import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Test from './sf.jpg';
import './Description.css';

class Description extends React.Component{
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

    addLike(){
        this.state.profil.like = this.state.profil.like + 1;
    }

    render(){
        return (
            <div className="infos">
                <Card>
                    <CardBody>
                        <CardText>Description : {this.state.profil.description}</CardText>
                        <CardText>Like : {this.state.profil.like}</CardText>
                        <Button className="ButtonStyle" onClick={() => this.addLike()}> C'est Super !  </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default Description;