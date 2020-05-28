import React from 'react'
import { connect } from 'react-redux'
function UserData(props) {
    return (
        <div>
            <pre> {JSON.stringify(props.userData.user, null, 2)}</pre>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        userData: state.user
    }

}
export default connect(mapStateToProps)(UserData)
