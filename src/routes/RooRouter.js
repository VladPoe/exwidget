import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router';
import ErrorScreen from './../components/ErrorScreen/ErrorScreen.js';
import ROUTES from './../constants/routes';
import ExchangeWidgetContainer from './../components/ExchangeWidget/ExchangeWidgetContainer';


const NOT_FOUND_MSG = 'Page not found';
const reloadPage = () => {
  window.location.reload();
};
const redirectHome = (historyReference) => () => {
  historyReference.push('/');
};

const RootRouter = (props) => {
  return (
    !props.doesAppWorks
      ? <Route render={ () => <ErrorScreen message={props.errorMessage}
                                           buttonText="Reload"
                                           buttonClickHandler={reloadPage} />
      } />
      : (
        <Switch>
          <Route path={ROUTES.INDEX} exact render={ () => <ExchangeWidgetContainer /> } />

          <Route render={ () => <ErrorScreen message={NOT_FOUND_MSG}
                                             buttonText="Home"
                                             buttonClickHandler={redirectHome(props.history)}/>
          } />
        </Switch>
      )
    );
};

RootRouter.propTypes = {
  doesAppWorks: PropTypes.bool.isRequired
};

export default RootRouter;