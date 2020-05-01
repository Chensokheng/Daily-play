import React from 'react';
import { Redirect, Route } from 'react-router-dom';
export default function PublicRoutes({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}
