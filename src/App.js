import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialUpload } from './store/actions/thunks';
import RootRouter from './routes/RooRouter';
import { withRouter } from 'react-router'

const disableBeforeAppPreloader = () => {
  const preloader = document.getElementById('before-app-preloader');
  preloader.classList.add('hidden'); // animate
  setTimeout(() => {
    preloader.remove();
  }, 400); // delete from DOM
};

const mapStateToProps = (state) => ({
  doesAppWorks: state.appStatus.works,
  errorMessage: state.appStatus.errorMessage
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
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
