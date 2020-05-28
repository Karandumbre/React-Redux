import React, { Component } from 'react';
import { fetchUser } from '../ReduxTest/action';
import { fetchSingleUser } from '../ReduxTest/UserAction';

import { connect } from 'react-redux';

export class TestContainerRedux extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    fetchSingleUserData(id) {
        this.props.fetchUser(id);
    }
    render() {
        const userData = this.props.users.users.map((user, key) => {
            return (

                <p style={{ cursor: 'pointer' }} key={key} onClick={() => { this.fetchSingleUserData(user.id) }}>
                    {user.name}
                </p >)
        })
        return (
            <>
                {userData}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => { dispatch(fetchUser()) },
        fetchUser: (user) => {
            dispatch(fetchSingleUser(user))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainerRedux)
