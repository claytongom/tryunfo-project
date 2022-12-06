import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="nameCard">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            id="nameCard"
            name="cardName"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descriptionCard">
          Descrição
          <input
            value={ cardDescription }
            onChange={ onInputChange }
            type="textarea"
            id="descriptionCard"
            name="cardDescription"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="Attr1Card">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            id="Attr1Card"
            name="cardAttr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="Attr2Card">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            id="Attr2Card"
            name="cardAttr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="Attr3Card">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            id="Attr3Card"
            name="cardAttr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="ImageCard">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            id="ImageCard"
            name="cardImage"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rareType">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : (
          <label htmlFor="trunfoCard">
            Super Tryunfo
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
            />
          </label>
        ) }

        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
