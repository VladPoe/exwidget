import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router';
import ROUTES from './../constants/routes';
import ErrorScreen from './../components/ErrorScreen/ErrorScreen.js';

const RootRouter = (props) => {
  return (
    <Switch>
      {
        !props.doesAppWorks
          ? <Route render={() => <ErrorScreen message={props.errorMessage} /> } />
          : (
            <Route />
          )
      }
    </Switch>
  );
};

RootRouter.propTypes = {
  doesAppWorks: PropTypes.bool.isRequired
};

export default RootRouter;