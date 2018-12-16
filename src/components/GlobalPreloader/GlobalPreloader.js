import React from 'react';
import { connect } from 'react-redux';
import { getScreenPreloadingStatus, getScreenPreloadingMessage } from './../../selectors';
import Preloader from "./../Preloader/Preloader";

const mapStateToProps = (state) => {
  return {
    isActive: getScreenPreloadingStatus(state),
    message: getScreenPreloadingMessage(state)
  };
};

const GlobalPreloader = (props) => {
  return props.isActive && <Preloader message={props.message}/>
};

export default connect(mapStateToProps)(GlobalPreloader);
