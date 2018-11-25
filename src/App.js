import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialUpload } from './store/actions/thunks';
import RootRouter from './routes/RooRouter';
import { withRouter } from 'react-router';
import { getAppWorkStatus, getAppErrorMessage } from './selectors';
import Preloader from "./components/Preloader/Preloader";

const disableBeforeAppPreloader = () => {
  const preloader = document.getElementById('before-app-preloader');
  preloader.classList.add('hidden'); // animate
  setTimeout(() => {
    preloader.remove();
  }, 400); // delete from DOM
};

const mapStateToProps = (state) => ({
  doesAppWorks: getAppWorkStatus(state),
  errorMessage: getAppErrorMessage(state),
});

const mapDispatchToProps = {
  initialUpload
};

class App extends Component {
  state = {
    isPending: true
  };

  componentDidMount() {
    this.props.initialUpload(this.initialUploadCallback);
  }

  initialUploadCallback = () => {
    this.setState(() => ({ isPending: false }));
    disableBeforeAppPreloader();
  };

  render() {
    return (
      <div className="app">
        {
          !this.state.isPending && <RootRouter {...this.props} />
        }
        <Preloader />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
