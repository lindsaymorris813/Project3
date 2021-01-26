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
        <h3 ref={_subtitle => (subtitle = _subtitle)}>Recipe Name</h3>
        <form>
          <div className="form-group" id="Author"> <h5>From: </h5>*Author name here*</div>
          <div className="form-group" id="category"><h5>For: </h5>*list of categories here*</div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput1" id="view-ingredients"><h5>Ingredients: </h5>*list of ingredients here*</label>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2" id="view-instructions"><h5>Instructions: </h5>*list of instructions here*</label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1"><h5>Make it? Rate it!</h5></label>
            <select className="form-control" id="exampleFormControlSelect1" style={{width: "50%"}}>
              <option>--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button type="submit">Save Rating</button>
          </div> 
          <br></br>
          <div className="form-group"><h6>Want to make something similar, but with your own twist? Click here to add a new recipe with your own spin!</h6>
            <button type="submit" id="fork-button">Tweak it!</button>
          </div>
          <button style={{float: "right"}} onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default ViewModal;