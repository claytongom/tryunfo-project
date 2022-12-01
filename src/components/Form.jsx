import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="nameCard">
          Nome
          <input
            type="text"
            id="nameCard"
            name="nameCard"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descriptionCard">
          Descrição
          <input
            type="textarea"
            id="descriptionCard"
            name="descriptionCard"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="Attr1Card">
          Attr01
          <input
            type="number"
            id="Attr1Card"
            name="Attr1Card"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="Attr2Card">
          Attr02
          <input
            type="number"
            id="Attr2Card"
            name="Attr2Card"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="Attr3Card">
          Attr03
          <input
            type="number"
            id="Attr3Card"
            name="Attr3Card"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="ImageCard">
          Imagem
          <input
            type="text"
            id="ImageCard"
            name="ImageCard"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rareType">
          Raridade:
          <select
            data-testid="rare-input"
            name="rareType"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoCard">
          Super Trybe Trunfo
          <input
            type="checkbox"
            id="trunfoCard"
            name="trunfoCard"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}
