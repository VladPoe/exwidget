import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router';
import ErrorScreen from './../components/ErrorScreen/ErrorScreen.js';
import ROUTES from './../constants/routes';
import ExchangeWidget from './../components/ExchangeWidget/ExchangeWidget';
import { getAppWorkStatus, getAppErrorMessage } from './../selectors';


const NOT_FOUND_MSG = 'Page not found';

const reloadPage = () => {
  window.location.reload();
};

const redirectHome = (historyReference) => () => {
  historyReference.push('/');
};

const NotFoundPage = (props) => {
  return <ErrorScreen message={NOT_FOUND_MSG}
                      buttonText="Home"
                      buttonClickHandler={props.buttonClickHandler}
  />
};

const mapStateToProps = (state) => {
  return {
    hasError: !getAppWorkStatus(state),
    errorMessage: getAppErrorMessage(state)
  };
};

const RootRouter = (props) => {
  console.log(props);
  return (
    props.hasError
      ? <Route render={ () => <ErrorScreen message={props.errorMessage}
                                           buttonText="Reload"
                                           buttonClickHandler={reloadPage} />
      } />
      : (
        <Switch>
          <Route path={ROUTES.INDEX} exact render={ () => <ExchangeWidget /> } />
          <Route render={ () =>
            <NotFoundPage buttonClickHandler={redirectHome(props.history) } />
          } />
        </Switch>
      )
    );
};

RootRouter.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps)(RootRouter);