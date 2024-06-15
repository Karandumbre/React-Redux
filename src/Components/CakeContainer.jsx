import React, { Component } from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";
export class CakeContainer extends Component {
  render() {
    return (
      <div>
        <h2>Number of Cakes: {this.props.numberOfCakes}</h2>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
