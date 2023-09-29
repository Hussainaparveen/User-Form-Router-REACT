import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function UserForm(){
    const navigate=useNavigate();
    const [userData,setUserData]=useState({
        userId:"",
        userName:"",
        mobileNo:"",
        emailId:"",
        password:"",
    });
    const[userList,setUserList]=useState([]);
    
    function handleChange(e){
        const{name,value}=e.target;
        setUserData({...userData,[name]: value});
        

    }

function handleSubmit(e){
    e.preventDefault();
    let updatedData={...userData };
    const updatedList = [...userList,updatedData]
    setUserList(updatedList);
    setUserData({ userId:"", userName: "", mobileNo: "", emailId: "" , password:""});
    
    localStorage.setItem("userList",JSON.stringify(updatedList));
    
navigate(`/formData`);
console.log(userList,"userList")
}

useEffect(function(){
    const retrieved=JSON.parse(localStorage.getItem('userList'));
    if(retrieved){
        setUserList(retrieved);
       
    }
},[]);

    return(
        <div>
            <h1>User Data Form</h1>
            <form className="form">
                
                <input type="text" name="userId" value={userData.userId} placeholder="enter your user-Id here" onChange={handleChange}/>
                <input type="text" name="userName" value={userData.userName} placeholder="enter your username here" onChange={handleChange}/>
                <input type="text" name="mobileNo" value={userData.mobileNo} placeholder="enter your mobile-no here" onChange={handleChange}/>
                <input type="text" name="emailId" value={userData.emailId} placeholder="enter your email-id here" onChange={handleChange}/>
                <input type="password" name="password" value={userData.password} placeholder="enter your password here" onChange={handleChange}/>
        
                <button onClick={handleSubmit}>submit</button>
                {/* <button onClick={()=>handleSubmit(userData.userId,userData.userName,userData.mobileNo,userData.emailId)}>submit</button> */}
               
               
            </form>
        </div>
    )
}
export default UserForm;