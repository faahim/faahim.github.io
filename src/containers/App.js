import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { Svg1, Svg2} from '../components/Svgs';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardSelected: false,
      choosenCard: null
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = param => event => {
    this.setState({
      cardSelected: true,
      choosenCard: param
    }, () => {
      const cardSvg = document.getElementsByClassName(this.state.choosenCard+"-svg")[0];
      cardSvg.classList.add("expand");
    });
  }

  render() {
    return (
      <div className={this.state.cardSelected ? "App single-card" : "App"}>
        <CardContainer clickHandler={this.clickHandler} choosenCard={this.state.choosenCard}/>
        <Svg1/>
        <Svg2/>
      </div>
    );
  }
}

export default App;
