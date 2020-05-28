import React, { Component } from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../Redux';

function ItemContainer(props) {
    return (
        <div>
            <div>
                <h2>Item : {props.item}</h2>
                <button onClick={() => { props.buyItem() }}>Buy Item</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownprops) => {
    const itemState = ownprops.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const dispatchAction = (props.cake) ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchAction
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
