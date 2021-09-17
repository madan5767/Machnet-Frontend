import React,{useState} from 'react'
import { useHistory} from 'react-router-dom';
import './home.css'

export const Home = () => {
    const [username, setUsername] = useState("");
    const history = useHistory();
    let inputErr="";

    const handleInputChange=(e)=>{
        const username=e.target.value;
        setUsername(username);
    }

    const handelFormSubmit =(e) =>{
        e.preventDefault();
        console.log(username.length);

        if(username.length<=0){
            inputErr = "Please enter a Username....."            
        }else{
            setUsername("");
            history.push(`/resume/${username}`);
        }
    }

    return (
        <div className='home-page'>
            <h1 className='title'>Github Profile</h1>
            <p className='sub-title'>Generate Your Github Profile</p>
            <form className='form' onSubmit={handelFormSubmit}>
                <label className='form__label'><span>Github Username</span></label>
                <div className="form-wrap">
                    <input type='text' value={username} className='form__input' name='username' onChange={handleInputChange}/>                                        
                    <button className='form__btn' type='submit'>Generate</button>
                </div>
            </form>
        </div>
    )
}
