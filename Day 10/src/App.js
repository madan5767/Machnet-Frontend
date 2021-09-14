import './App.css';
import React ,{useState} from 'react';

function App() {
  //const to Store values
  const [fullname, setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");

  //const to store errors
  const [fullnameErr, setFullNameErr] = useState({});
  const [emailErr,setEmailErr] = useState({});
  const [phoneErr,setPhoneErr] = useState({});
  const [addressErr,setAddressErr] = useState({});

  const onSubmit = (e) =>{
    e.preventDefault();
    const isValid = formValidation();
  }

  const formValidation = () =>{
    const fullnameErr = {};
    const emailErr = {};
    const phoneErr ={};
    const addressErr = {};
    let isValid = true;
    
    if(fullname.trim().length < 5){
      fullnameErr.fullnameShort = "Full Name is Too Short";
      isValid = false;
    }

    if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      emailErr.emailInvalid = "Please enter a valid email";
      isValid = false;
    }

    if(phone.trim().length>10 || phone.trim().length<10){
      phoneErr.phoneTooLong = "Enter a 10 digit Phone number";
      isValid = false;
    }

    if(address.trim().length<5){
      addressErr.addressShort = "Please enter a valid address";
      isValid = false;
    }

    setFullNameErr(fullnameErr);
    setEmailErr(emailErr);
    setPhoneErr(phoneErr);
    setAddressErr(addressErr);

    return isValid;
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <h1 id="heading">Online Registration Form</h1>
          <label>Full Name: </label>
          <input type="text" value ={fullname} onChange={(e)=>{setFullName(e.target.value)}}/>
          <br/>
          {Object.keys(fullnameErr).map((key) =>{
            return <div style={{color:"red"}}>{fullnameErr[key]}</div>
          })}

          <label>Email: </label>
          <input type="email" value ={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          {Object.keys(emailErr).map((key) =>{
            return <div style={{color:"red"}}>{emailErr[key]}</div>
          })}

          <label>Phone:(+977)</label>
          <input type="number" value ={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          <br/>
          {Object.keys(phoneErr).map((key) =>{
            return <div style={{color:"red"}}>{phoneErr[key]}</div>
          })}

          <label>Address: </label>
          <input type="text" value ={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          <br/>
          {Object.keys(addressErr).map((key) =>{
            return <div style={{color:"red"}}>{addressErr[key]}</div>
          })}
          <button class="submit" type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;