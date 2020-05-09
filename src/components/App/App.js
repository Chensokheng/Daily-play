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

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Loading from '../LoadingScreen/Loading';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Privateroutes from '../../routes/private.routes';
import PublicRoutes from '../../routes/public.routes';
import Home from '../Home';
import LandingPage from '../LandingPage';
import { auth } from '../../utils/firebase';
import ThemeApi from '../../utils/ThemeApi';
import Auth from '../Auth';

const useStyle = makeStyles((theme) => ({
  loadingContainer: {
    height: '100vh',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontFamily: 'Bangers',
    letterSpacing: theme.spacing(0.5),
    fontSize: '2rem',
  },
}));

export default function App() {
  const [user, setUser] = useState(null);
  const [authorized, setAuthroize] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyle();
  const isAuthorized = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setAuthroize(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    isAuthorized();
  }, []);
  return (
    <>
      {loading ? (
        <div className={classes.loadingContainer}>
          <Loading type="bars" color="#1CA1F2" height="100px" width="100px" />
          <Typography className={classes.title}>From Daily Play</Typography>
        </div>
      ) : (
        <ThemeApi.Provider value={{ setUser, setAuthroize, authorized, user }}>
          <Router>
            <Switch>
              <PublicRoutes
                path="/"
                exact
                component={LandingPage}
                auth={authorized}
              />
              <PublicRoutes
                path="/auth"
                exact
                component={Auth}
                auth={authorized}
              />
              <PublicRoutes
                path="/landingpage"
                component={LandingPage}
                auth={authorized}
              />
              <Privateroutes path="/home" component={Home} auth={authorized} />
            </Switch>
          </Router>
        </ThemeApi.Provider>
      )}
    </>
  );
}
