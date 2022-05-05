import React from 'react'
import '../assets/css/card-profile.css';
import profile from '../assets/img/profile.jpg';

const ProfileCard = (props) => {
 
const bg = {backgroundImage:`url(${profile})`}
  return (
  <div className="container-profile" >
    <div className="profile" style={bg}>
        <div className="transparent"></div>
    </div>
    <div className="content">
        <div className="avatar">
            <img src={profile} alt="" width="120" height="120"/>
        </div>
       <div className="title">
            <h2>{props.name}</h2>
            <h6>{props.location}</h6>
       </div>
        <div className="follow-info">
            <div class="shot">{props.shots}<span>Shot</span></div>
            <div class="followers">{props.followers}<span>Followers</span></div>
            <div class="following">{props.followings}<span>Followings</span></div>
        </div>
     </div>
  </div>
  )
}

export default ProfileCard