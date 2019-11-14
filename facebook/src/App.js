import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataBase from "./DataBase";
import NavBar from "./NavBar";
import { Button } from 'reactstrap';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {personCo :0};
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (newPersonCo) => {
        this.setState(state => ({
                personCo:newPersonCo,
            })
        );
    }




  render(){
    return(
        <div>
            <section>
                <div className="NavBarButton" >
                    <Button outline color="secondary" size="lg" onClick={(newPersonCo) => this.handleChange(0)} >{DataBase[0].prenom}</Button>
                    <Button outline color="secondary" size="lg" onClick={(newPersonCo) => this.handleChange(1)}>{DataBase[1].prenom}</Button>
                    <Button outline color="secondary" size="lg" onClick={(newPersonCo) => this.handleChange(2)}>{DataBase[2].prenom}</Button>
                </div>
            </section>

            <section>
                <Card profil={DataBase[this.state.personCo]}></Card>
            </section>
        </div>
    )
  }
}

export default App;
