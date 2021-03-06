import React, { Component } from "react";
import "./DefaultButton.scss";
import { Button } from "@material-ui/core";

class DefaultButton extends Component {
  state = {};
  render() {
    return (
      <div className="ButtonBlock">
        <Button
          id={this.props.id}
          name={this.props.name}
          className={
            this.props.purpose === "cancel" ? "ButtonCancel" : "Button"
          }
          type={this.props.type}
          variant="contained"
          disabled={
            this.props.disabled === undefined ? false : this.props.disabled
          }
          onClick={this.props.onClick}
        >
          {this.props.label === undefined ? "Button" : this.props.label}
        </Button>
      </div>
    );
  }
}

export default DefaultButton;
