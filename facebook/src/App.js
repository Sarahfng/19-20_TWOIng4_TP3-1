import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataBase from "./DataBase";
import NavBar from "./NavBar";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {profils : DataBase};
    }

  render(){
    return(
        <div>
            <section>
            <NavBar profils={this.state.profils}/>
            </section>

            <section>
                <Card profil={this.state.profils[0]}></Card>
                <Card profil={this.state.profils[1]}></Card>
                <Card profil={this.state.profils[2]}></Card>
            </section>
        </div>
    )
  }
}

export default App;
