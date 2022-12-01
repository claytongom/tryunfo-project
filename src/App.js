import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Card
          cardName=""
          cardDescription=""
          cardImage=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardRare=""
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
