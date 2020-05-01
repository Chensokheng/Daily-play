import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function Privateroutes({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/landingpage" />
      }
    />
  );
}
