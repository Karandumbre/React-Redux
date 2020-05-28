import React, { Component } from "react";
import "./App.css";
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
// import NewCakeContainer from './Components/NewCakeContainer';
// import ItemContainer from './Components/ItemContainer';
// import UserContainer from './Components/UserCointainer';
// import store from './ReduxAsync/store';
import TestContainerRedux from './Components/TestContainerRedux';
import UserData from './Components/UserData';
import Loader from './Common/loader';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    // const loader = (this.props.currentState.user.loading) ? <Loader></Loader> : '';
    return (
      <div className="main">
        <h2>Redux App</h2>
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        {/* <NewCakeContainer></NewCakeContainer>
          <ItemContainer cake='cake'></ItemContainer> */}
        {/* <UserContainer></UserContainer> */}
        {/* <div className='row'>
          <div className="col-6">
            <TestContainerRedux></TestContainerRedux>
          </div>
          <div className="col-6">
            {loader}
            <UserData></UserData>
          </div>
        </div> */}

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { currentState: state }
}
export default connect(mapStateToProps)(App);

