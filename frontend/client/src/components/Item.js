import React, { Component } from "react";
import "../components/Item.css";

export default class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <h2>Company Name</h2>
        <p>Company Location</p>
        <p>CTC</p>
        <p>CGPA</p>
        <p>Type[Internship / Placement]</p>
        <p>Last Date to Apply</p>
        <div className="button-container">
          <button>Link to apply</button>
        </div>
      </div>
    );
  }
}
