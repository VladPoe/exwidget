import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './errorScreen.module.css';

const ErrorScreen = (props) => {
  return (
    <article className={styles.page}>
      <p className={styles.message}>
        { props.message }
      </p>
    </article>
  );
};

ErrorScreen.propTypes = {
  message: PropTypes.string
};

ErrorScreen.defaultProps = {
  message: 'Some undetected error occurred'
};

export default ErrorScreen;