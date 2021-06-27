import react from 'react'
import Profile from './Profile'

const Profiles = (props) => {
    return (
        <div className="ProfileList">
            {props.Profile.map((pr)=> (
                <Profile fullName={pr.fullName}
                profession={pr.profession}
                bio={pr.bio} />
    ))}
    </div>
  );
};

export default Profiles;
