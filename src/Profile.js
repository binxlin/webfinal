import React from 'react'
import {Link} from 'react-router-dom'


function Profile() {
    return (
        <div className = "User">
            <Link to = "/pricing">
                首頁
            </Link> 
            <h2 align = "center">大家好，以下介紹組員</h2>
            <h3 align = "center">B0829026:李宥睿</h3>
            <h2 align ="center"><a  href = "https://www.facebook.com/profile.php?id=100004022577121" target = "blank">宥睿的臉書網站</a></h2>
            <h2 align = "center"><a href = "https://github.com/kylelee26" target = "blank">宥睿的github</a></h2>

            <h3 align = "center">B0829013:林冠斌</h3>
            <img src={require('./binbin.jpg')} alt="Background"/>
            <h2 align = "center"><a href="https://www.facebook.com/binx.lin" target="blank">冰冰姐的臉書</a></h2>
            <h2 align ="center"><a href ="https://github.com/binxlin" target="blank">冰冰姐的github</a></h2>
        </div>
    );
}


export default Profile;