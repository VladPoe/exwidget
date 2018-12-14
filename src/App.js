import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialUpload } from './store/actions/thunks';
import RootRouter from './routes/RootRouter';
import { withRouter } from 'react-router';
import GlobalPreloader from "./components/GlobalPreloader/GlobalPreloader";

class App extends Component {
  // state = {
  //   isPending: true
  // };

  componentDidMount() {
    // this.props.initialUpload()
    //   .then(() => this.initialUploadCallback());
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

export default withRouter(App);
