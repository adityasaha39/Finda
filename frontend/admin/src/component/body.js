import React, { Component } from "react";
import { Input, DatePicker, Button } from "antd";
import "antd/dist/antd.css";
import "../component/body.css";

export default class body extends Component {
  render() {
    return (
      <div className="body-container">
        <div className="item">
          <div className="label">Company Name</div>
          <Input placeholder="company name"  className="input"/>
        </div>
        <div className="item">
          <div className="label">Company Location</div>
          <Input placeholder="remote" className="input"/>
        </div>
        <div className="item">
          <div className="label">CTC Per Year</div>
          <Input placeholder="cost per annum" className="input"/>
        </div>
        <div className="item">
          <div className="label">CGPA Cut off</div>
          <Input placeholder="ex:- 8 CGPA" className="input"/>
        </div>
        <div className="item">
          <div className="label">Type</div>
          <Input placeholder="Intership/Placement" className="input"/>
        </div>
        <div className="item">
          <div className="label">Last Date To Apply</div>
          <div className="date-picker">
          <DatePicker />
          </div>
        </div>
        <div className="item">
          <div className="label">Link To Apply</div>
          <Input placeholder="Additional Information if any" className="input"/>
        </div>
        <Button type="primary">Submit</Button>
      </div>
    );
  }
}
