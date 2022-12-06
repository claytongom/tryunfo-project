import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validationButton);
  };

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const aboveNinety = 90;
    const totalAttr = 210;

    const validAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= aboveNinety;
    const validAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= aboveNinety;
    const validAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= aboveNinety;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= totalAttr;
    const validCard = cardName !== '' && cardDescription !== '' && cardImage !== '';

    this.setState({ isSaveButtonDisabled: !(validAttr1
      && validAttr2
      && validAttr3
      && sum
      && validCard),
    });
  };

  render() {
    return (
      <section>
        <h3>Tryunfo</h3>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...this.state }
        />
      </section>
    );
  }
}

export default App;
