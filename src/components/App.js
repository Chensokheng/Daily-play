// import React, { useState, useEffect } from 'react';
// import './App.css';
// import firebase from './utils/firebase';

// function App() {
//   const [state, setState] = useState([]);
//   const [todo, setTodo] = useState();
//   const [submit, setSubmit] = useState(false);
//   const handleOnChange = (e) => {
//     setTodo(e.target.value);
//   };
//   const handleOnSubmit = () => {
//     const itemRef = firebase.database().ref('item');
//     const item = {
//       title: todo,
//     };
//     itemRef.push(item);
//     setSubmit(!submit);
//   };
//   const onHandleDelte = (id) => {
//     const itemRef = firebase.database().ref(`/item/${id}`);
//     // itemRef.remove();
//     itemRef.update({ title: 'yo' });
//   };

//   const getData = () => {
//     const itemsRef = firebase.database().ref('item');
//     itemsRef.on('value', (snapshot) => {
//       const items = snapshot.val();

//       let data = [];
//       console.log(Object.getOwnPropertyNames(items).length);
//       for (let itemId in items) {
//         const item = {
//           title: items[itemId].title,
//           id: itemId,
//         };
//         data.push(item);
//       }
//       setState(data);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, [submit]);
//   return (
//     <div className="App">
//       <input onChange={handleOnChange} />
//       <button onClick={handleOnSubmit}>Submit</button>

//       <div>
//         {state.map((item) => {
//           return (
//             <div>
//               <h1>{item.title}</h1>
//               <button onClick={() => onHandleDelte(item.id)}>delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Button from './Button';

export default function App() {
  return (
    <div>
      <Button primary>Explore</Button>
    </div>
  );
}
