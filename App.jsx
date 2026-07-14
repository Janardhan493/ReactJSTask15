// // import React  from "react";
// // import ParentComponent from "./components/ParentComponent";
// // 
// // function App(){
//   // return (
//     // <div>
//       {/* <ParentComponent /> */}
// {/*  */}
//     {/* </div> */}
//   // );
// // 
// // }
// // 
// // 
// // export default App;





// //Task2
// // 
// // import React from "react";
// // import TaskThreeAssignment from "./Task3";
// // 
// // function App(){
//   // return(
//     // <div>
//       {/* <TaskThreeAssignment /> */}
//     {/* </div> */}
//   // );
// // }
// // 
// // export default App;




// //Task4

// //import React from 'react';
// // import Task4 from './Task4';
// // 
// // function App() {
//   // return (
//     // <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
//       {/* <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>React Task 4</h1> */}
//       {/* <hr style={{ border: '0.5px solid #ccc', marginBottom: '30px' }} /> */}
// {/*        */}
//      // Rendering Task 4
//       {/* <Task4 /> */}
//     {/* </div> */}
//   // );
// // }
// // 
// // export default App;


// //Task5

// // import React from "react";
// // import Task5 from "./Task5";
// // 
// // function App(){
//   // return(
//     // <div style={{ backgroundColor:'#eaeaea',minHeight: '100vh',padding:'20px'}}>
// {/*    */}
//     //Renders our clean 10-field registration form component
//       {/* <Task5 /> */}
//     {/* </div> */}
//   // );
// // }
// // 
// // export default App;


// //Task6

// // import React from "react";
// // import Task6 from "./Task6";
// // 
// // function App() {
//   // return(
//     // <div style={{backgroundColor:'#f7fafc',minHeight:'100vh',padding:'15px'}}>
//      // Renders the Task6 component which displays a list of users with their details
//       {/* <Task6 /> */}
//     {/* </div> */}
//   // );
// // }
// // export default App;


// //Task7

// // import React from "react";
// // import Task7 from "./Task7";
// // 
// // function App() {
//   // return (
//     // <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px' }}>
//      // Launch Task 7 Profile Upload Widget View
//       {/* <Task7 /> */}
//     {/* </div> */}
//   // );
// // }
// // 
// // export default App;


// //Task8

// // import React from "react";
// // import ChatApp from "./Task8ChatApp";

// // function App() {
// //   return (
// //     <div className="App">
// //       {/* Rendering the Mini Chat Application */}
// //       <ChatApp />
// //     </div>
// //   );
// // }

// // export default App;


// //Task9

// // import React, { createContext, useState } from 'react';
// // import Component1 from './Task9';
// // import './Task9.css';

// // // 1. CREATE AND EXPORT THE CONTEXT
// // export const FormContext = createContext();

// // export default function App() {
// //   // Theme State
// //   const [theme, setTheme] = useState('light');

// //   // Form State (10 fields)
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     mobileNumber: '',
// //     password: '',
// //     confirmPassword: '',
// //     dob: '',
// //     gender: '',
// //     address: '',
// //     city: ''
// //   });

// //   // Toggle Theme Function
// //   const toggleTheme = () => {
// //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// //   };

// //   // Handle Form Inputs
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   return (
// //     // 2. PROVIDE THE CONTEXT TO ALL CHILD COMPONENTS
// //     <FormContext.Provider value={{ theme, toggleTheme, formData, handleInputChange }}>
// //       <div className={`app-container ${theme}`}>
// //         <div className="app-wrapper">
// //           <h1 className="app-title">Task 9: useContext Hook Implementation</h1>
// //           {/* Nested Structure without any props */}
// //           <Component1 />
// //         </div>
// //       </div>
// //     </FormContext.Provider>
// //   );
// // }



// // Task10

// // import React from "react";
// // import Task10 from "./Task10";
// // function App() {
// //   return (
// //     <div className="App">
// //       {/* Rendering the complete Task 10 Routing Application */}
// //       <Task10 />
// //     </div>
// //   );
// // }

// // export default App;


// //Task11
// // 
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { UserList, UserDetails } from './task11';
// // import './task11.css';
// // 
// // function App() {
//   // return (
//     // <Router>
//       {/* <div className="app-container"> */}
//         {/* <header className="app-header"> */}
//           {/* <h1>User Directory Panel</h1> */}
//         {/* </header> */}
//         {/* <main className="app-content"> */}
//           {/* <Routes> */}
//             //Redirects root URL path straight to the main users directory
//             {/* <Route path="/" element={<Navigate to="/users" replace />} /> */}
//             {/* <Route path="/users" element={<UserList />} /> */}
//             {/* <Route path="/users/:id" element={<UserDetails />} /> */}
//           {/* </Routes> */}
//         {/* </main> */}
//       {/* </div> */}
//     {/* </Router> */}
//   // );
// // }
// // 
// // export default App;

// // //Task12
// // import React from 'react';
// // import UserTable from './task12';
// // import './task12.css';

// // function App() {
// //   return (
// //     <div className="app-container">
// //       <header className="main-header">
// //         <h1>Task 12: React Custom Hooks Directory</h1>
// //       </header>
// //       <main>
// //         <UserTable />
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;


// //TASK13
// // import React from 'react';
// // import TicTacToa from './task13';
// // import './task13.css';
// // 
// // function App() {
//   // return (
//     // <div className="app-container">
//       {/* <header className="game-header"> */}
//         {/* <h1 style={{ color: '#0f172a', opacity: 1, visibility: 'visible' }}> */}
//           {/* Task 13: Tic Tac Toe Game */}
//         {/* </h1> */}
//       {/* </header> */}
//       {/* <main> */}
//         {/* <TicTacToa /> */}
//       {/* </main> */}
//     {/* </div> */}
//   // );
// // }
// // 
// // export default App;



// //task14

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Task14 from './Task14';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Mounts the pagination project as the main default view */}
//         <Route path="/" element={<Task14 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




//Task15

import React from 'react';
import Task15CRUD from './Task15CRUD';

function App() {
  return (
    <div>
      <Task15CRUD />
    </div>
  );
}

export default App;







