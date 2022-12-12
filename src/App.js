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
    hasTrunfo: false,
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    const newCard = {
      name: cardName,
      description: cardDescription,
      image: cardImage,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      rare: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  render() {
    const { cards } = this.state;

    return (
      <section>
        <h3>Tryunfo</h3>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div>
          { cards.map((card) => (
            <Card
              key={ card.name }
              cardName={ card.name }
              cardDescription={ card.description }
              cardImage={ card.image }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />
          )) }
        </div>
      </section>
    );
  }
}
export default App;
