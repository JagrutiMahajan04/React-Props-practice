//const student = {
  //firstName:"Jagruti",
  //email: "jagrutimaha2000@gmail.com",
  //mobile:"7558660042",
  //bloodGroup:"A+ve"
//}

//console.log(student.firstName)//1method
//console.log(student['mobile'])/2method

//3rdmethod
//const firstName = student.firstName;
//const bloodGroup = student.bloodGroup;

//console.log(firstName,bloodGroup);/3rdend

//Destructuring method

//const {firstName,email,mobile,bloodGroup,salary} = student;

//console.log(firstName);//Jagruti
//console.log(email);//jagrutimaha2000@gmail.com
//console.log(mobile);//7558660042
//console.log(bloodGroup);//A+ve
//console.log(salary);//undefined


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);