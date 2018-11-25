import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './preloader.module.css';
import { getScreenPreloadingStatus, getScreenPreloadingMessage } from './../../selectors';


const mapStateToProps = (state) => {
  return {
    isActive: getScreenPreloadingStatus(state),
    message: getScreenPreloadingMessage(state)
  };
};

const Preloader = (props) => {
  return props.isActive && (
    <div className={styles.preloader}>
      <div className={styles.inner}>
        {
          props.message && (
            <div className={styles.messageWrap}>
              { props.message }
            </div>
          )
        }
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
      </div>
    </div>
  )
};

Preloader.propTypes = {
  isActive: PropTypes.bool.isRequired,
  message: PropTypes.string
};

Preloader.defaultProps = {
  isActive: false,
  message: ''
};

export default connect(mapStateToProps)(Preloader);

