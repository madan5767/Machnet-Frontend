import React, { useState } from "react";
import "./main.css";
import { useHistory } from "react-router-dom";
import arrow from "./back.png";
import mail from "./mail.png";
import location from "./location.png";
import twitter from "./twitter.png";
import office from "./office.png";
import calender from "./calender.png";
import website from "./website.png";

export const Main = (props) => {
    const { userDetail } = props;
    const history = useHistory();
    
    const hireBtn = document.querySelector(".hire");
    if(userDetail.hireable===null){
        hireBtn.style.visibility= 'hidden';
    }

    console.log(userDetail.hireable);

    const back = () => {
    // history.goBack();
    history.push("/");
  };

    return (
        <div className="resume">
            <div className="resume-header">
              <button onClick={back}><img className="back-btn" src={arrow} /></button>
              <button className="hire">Hire Me</button>
            </div>
            <div className="resume-profile">
                <img className="profile" src={userDetail.avatar_url} />
            </div>
            <div className="resume-content">
                <div className="resume-header-content">
                    <div className="name-wrapper col-display">
                        <h1>{userDetail.name}</h1>
                        <h4>{userDetail.login}</h4>
                    </div>
                    <div className="row-display">
                        <div className="follow-wrap col-display">
                            <label>{userDetail.followers}</label>
                            <h3>followers</h3>
                        </div>
                        <div className="following-wrap col-display">
                            <label>{userDetail.following}</label>
                            <h3>following</h3>
                        </div>
                        <div className="repo-wrap col-display">
                            <label>{userDetail.public_repos}</label>
                            <h3>Repository</h3> 
                        </div>  
                    </div>                      
                </div>

                <div className="resume-body-content">

                    <div className="userdetails">
                        <div className="userdetails-col1">
                        <div className="col-display">
                            <label><img className="icons" src={mail}/>Email</label>
                            <h4>{userDetail.email}</h4> 
                        </div>
                        <div className="col-display">
                            <label><img className="icons" src={location}/>Location</label>
                            <h4>{userDetail.location}</h4> 
                        </div>
                        <div className="col-display">
                            <label><img className="icons" src={twitter}/>Twitter</label>
                            <h4>{userDetail.twitter_username}</h4> 
                        </div>
                        </div>
                        <div className="userdetails-col2">
                        <div className="col-display">
                            <label><img className="icons" src={office}/>Organization</label>
                            <h4>{userDetail.company}</h4> 
                        </div>
                        <div className="col-display">
                            <label><img className="icons" src={calender}/>Joined Date</label>
                            <h4>{userDetail.created_at}</h4> 
                        </div>
                        <div className="col-display">
                            <label><img className="icons" src={website}/>Website</label>
                            <h4>{userDetail.blog}</h4> 
                        </div>      
                        </div>
                    </div>

                    <div className="userbio">
                        <label>Bio</label>
                        <p>{userDetail.bio}</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}