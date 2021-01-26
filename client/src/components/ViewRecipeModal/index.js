/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Modal from "react-modal";




const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};

Modal.setAppElement("#root");

const ViewModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color ="#f00";
  }

  function closeModal(event){
    event.preventDefault();
    setIsOpen(false);
  }

  //POST for DB - Add New Recipe

  // Add Ingredients Dropdown --> Make Component for Ingredient line
  // Quantity for Ingredients

  return(
    <div>
      <button type="button" className="btn btn-block btn-info active float-right" id="search-btn" onClick={openModal}>View Recipe</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 ref={_subtitle => (subtitle = _subtitle)}>Add Recipe</h3>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Recipe Name:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Recipe Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Ingredients:</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Strawberries, Oranges, Acai, etc..."/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Rating:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="1-5"/>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Low Sugar</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox2">High Protein</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Low Carb</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Weight Loss</label>
          </div>
          <br></br>
          <button type="submit">Blend It!</button>
          <button onClick={closeModal}>Trash It!</button>
        </form>
      </Modal>
    </div>
  );
};

export default ViewModal;