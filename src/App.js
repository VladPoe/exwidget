import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialUpload } from './store/actions/thunks';
import RootRouter from './routes/RooRouter';
import { withRouter } from 'react-router';
import { getAppWorkStatus, getAppErrorMessage } from './selectors';
import Preloader from "./components/Preloader/Preloader";

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
    this.props.initialUpload()
      .then(() => this.initialUploadCallback());
  }

  initialUploadCallback = () => {
    this.setState(() => ({ isPending: false }));
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
