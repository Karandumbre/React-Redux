import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from './../ReduxAsync/actions';
function UserCointainer({ users, fetchUsers }) {
    let initialData = [];
    const data = users.users.users;
    useEffect(() => {
        fetchUsers();
    }, []);

    if (data) {
        initialData = data.map(u => console.log(u))
    }
    return (
        <div>
            <h2>User: {initialData.loading}</h2>
            {/* <button onClick={() => { props.fetchUsers() }}>Fetch User</button> */}
            <div>
                {initialData}
            </div>

            <div>
                {data && data.map(u =>
                    <div>
                        <p>{u.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCointainer)
