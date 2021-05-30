import userPhoto from '../../img/user__photo.png';

const UserPhoto = () => {
    return (
        <div className="sidebar__photo">
            <img src={userPhoto} alt="User_photo" />
        </div>
    );
}

export default UserPhoto;