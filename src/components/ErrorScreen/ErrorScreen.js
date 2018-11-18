import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './errorScreen.module.css';
import CommonButton from './../CommonButton/CommonButton';
import MajorTom from "../MajorTom/MajorTom";

const reloadPage = () => {
  window.location.reload();
};

const ErrorScreen = (props) => {
  return (
    <article className={styles.page}>
      <h4 className="visuallyhidden" hidden>Error</h4>
      <div className={styles.infoWrap}>
        <span className={styles.title}>Oops!</span>
        <p className={styles.message}>
          { props.message }
        </p>
        <div className={styles.btnWrap}>
          <CommonButton text={'Reload'}
                        type={'button'}
                        clickHandler={reloadPage}
          />
        </div>
      </div>
      <div className={styles.decorWrap}>
        <div className={styles.animation}>
          <MajorTom width="100%" height="100%" />
        </div>
      </div>
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