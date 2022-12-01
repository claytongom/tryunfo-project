import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <div>
          <h1 data-testid="name-card">{cardName}</h1>
        </div>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div>
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <p data-testid="attr1-card">
            Attr01......................
            { cardAttr1 }
          </p>
        </div>
        <div>
          <p data-testid="attr2-card">
            Attr02......................
            { cardAttr2 }
          </p>
        </div>
        <div>
          <p data-testid="attr3-card">
            Attr03......................
            { cardAttr3 }
          </p>
        </div>
        <div>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        <div>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
