import PropTypes from 'prop-types';
import {Card} from "../../UI/Card.jsx";
import './UserCard.scss';

function UserCard({user}){

    return(
        <div className="userCard">
            <Card>
                <p key="KNumber:{student.UserEmail}">{user.UserEmail.substring(0,8)}</p>
                <p key="Name:{student.UserFirstname}">{`${user.UserFirstname} ${user.UserLastname}`}</p>
                <img src={user.UserImageURL} alt={user.UserEmail.substring(0,8)} />
            </Card>
        </div>
    );
}

UserCard.PropTypes = {
    user: PropTypes.shape({
        UserEmail: PropTypes.string.isRequired,
        UserFirstname: PropTypes.string.isRequired,
        UserLastname: PropTypes.string.isRequired,
        UserImageURL: PropTypes.string.isRequired,

    })
}

export default UserCard;