import React from 'react';
import { useParams } from 'react-router-dom';

function DataDesc() {
  // const [retrievedData, setRetrievedData] = useState([]);
  const { userId,userName,mobileNo,emailId } = useParams();

  // useEffect(() => {
  //   // const retrievedData = JSON.parse(localStorage.getItem('userList'));

  //   // if (retrievedData) {
  //   //   setRetrievedData(retrievedData);
  //   // // }
  // }, [userId,userName,mobileNo,emailId]);

  return (
    <div id="dataDesc">
      <p>user-Id: {userId}</p>
      <p>user Name: {userName}</p>
      <p>mobile-No: {mobileNo}</p>
      <p>email-Id: {emailId}</p>
    </div>
  );
}

export default DataDesc;
