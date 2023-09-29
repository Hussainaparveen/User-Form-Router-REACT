import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

function FormData (){
        
   const [retreivedArray,setRetreivedArray]=useState([]);
   const navigate=useNavigate();
  //  const {userId,userName,mobileNo,emailId}=useParams();

   useEffect(function(){
    const retreivedData=JSON.parse(localStorage.getItem('userList'));
    // console.log(retreivedData,"retrieved data");
    if(retreivedData){
      setRetreivedArray(retreivedData);  
    }
   },[]);

   function handleClick(userId,userName,mobileNo,emailId){
   navigate(`/dataDesc/${userId}/${userName}/${mobileNo}/${emailId}`);
   }
    
  return (
    <div className='formData'>
         {retreivedArray.map(function(value,index){
                    return( 
                    <div key={index} id="userdata" >
                        <p>user-Id:{value.userId}</p>
                        <p>user Name:{value.userName}</p>
                        <p>mobileNo:{value.mobileNo}</p>
                        <p>emailId:{value.emailId}</p>
                        {/* <p>user-Id:{userId}</p>
                        <p>user Name:{userName}</p>
                        <p>mobileNo:{mobileNo}</p>
                        <p>emailId:{emailId}</p> */}
                        <button id="formButton" onClick={()=>handleClick(value.userId,value.userName,value.mobileNo,value.emailId)}>Description</button>
                    </div>
                    )
                })}
    </div>
  )
}

export default FormData


