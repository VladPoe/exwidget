import React from 'react';
import PropTypes from 'prop-types';
import styles from './preloader.module.css';

const Preloader = (props) => {
  return (
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

export default Preloader;

