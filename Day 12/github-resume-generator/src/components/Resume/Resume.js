
import React,{useState} from 'react'
import './main.css'
import { Main } from './Main'
import useUserDetails from '../services/fetch-user'

export const Resume = (props) => {
    const { username } = props.match.params;
    const { loading,userDetail,error} =useUserDetails(username);
    console.log(userDetail);

    const renderResume = () => {
        if (loading) {
          return <div className='loading'>Loading...</div>;
        }
    
        if (error) {
          return <div className="error">{error}</div>;
        }
    
        return <Main userDetail={userDetail} />;
      };

    return (
      <div>{renderResume()}</div>        
    )
}
