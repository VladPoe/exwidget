import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialUpload } from './store/actions/thunks.js';
import RootRouter from './routes/RooRouter';
import { withRouter } from 'react-router'


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
  };

  render() {
    return (
      <div className="app">
        { !this.state.isPending && <RootRouter {...this.props} />  }
      </div>



      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
