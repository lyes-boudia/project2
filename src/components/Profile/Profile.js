import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h4>{props.profession}</h4>
            <span>{props.bio}</span>
        </div>
    )
}
export default Profile