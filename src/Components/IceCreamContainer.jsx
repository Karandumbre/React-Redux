import React, { Component } from 'react'
import { buyIceCream } from '../Redux/index';
import { connect } from 'react-redux';
export class IceCreamContainer extends Component {

    render() {
        return (
            <div>

                <h2>Number of iceCream: {this.props.numberOfIceCreams}</h2>
                <button onClick={this.props.buyIceCream}>Buy Cake</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => { dispatch(buyIceCream()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
