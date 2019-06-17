import React, { Component } from "react";
import Archer from "./components/Archer";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import characters from "./characters.json";
import "./App.css";

// creating a class that will extend on to components 
// adding state values //
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    characters: characters
  };
//methdo to randomize the pictures displayed on the Archer cards. //
  randomRender = id => {
    // If the image of the character clicked has the same unique id as the one clicked before, user is loosing//
    this.state.characters.forEach((image) => {
      if (image.id === id) {
        if (image.clicked) {
          alert('You guessed incorrectly!');
          this.setState({})
          this.resetGame();
          return false;
        }
        else {

          this.updateScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.topScore) {
          this.newtopScore();
        }
      }
    });
  }

  randomOrganize = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ characters: copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.wins())
  }

  newtopScore = () => {
    this.setState((newState) => ({
      topScore: newState.score
    }))
  }
// //
  wins = () => {
    if (this.state.score === this.state.characters.length) {
      alert('You guessed correctly!')
      this.setState({});
      this.resetGame();
    }
    else {
      setTimeout(() => {
        this.randomOrganize(this.state.characters)
      }, 500);
    }
  }
// resetting the game by changing the state of the clicked event to false again. //
  resetGame = () => {
    this.state.characters.forEach((image) => {
      image.clicked = false;
    })
    this.setState({ score: 0 })
  }

  // Method Map will render all components to the app.
  render() {
    return (
      <Wrapper>
          <Nav score={this.state.score} topScore={this.state.topScore} />
          <Instructions />
        {this.state.characters.map(character => {
          return <Archer
            {...character}
            key={character.id}
            randomRender={this.randomRender}
            randomOrganize={() => this.randomOrganize(this.state.characters)}
          />;
        })}
      </Wrapper>
  )};
}

export default App;
