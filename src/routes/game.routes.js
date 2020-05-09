import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Games/Layout';

export default function GameRoutes({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Layout>
            <Component {...props} />{' '}
          </Layout>
        ) : (
          <Redirect to="/landingpage" />
        )
      }
    />
  );
}
