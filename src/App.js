import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from './store/actions/thunks';
import RootRouter from './routes/RootRouter';
import { withRouter } from 'react-router';
import GlobalPreloader from "./components/GlobalPreloader/GlobalPreloader";

const mapDispatchToProps = {
  getUserData
};

class App extends Component {

  componentDidMount() {
    this.props.getUserData();
  }

  initialUploadCallback = () => {
    this.setState(() => ({ isPending: false }));
  };

  render() {
    return (
      <div className="app">
        <RootRouter {...this.props} />
        <GlobalPreloader />
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
