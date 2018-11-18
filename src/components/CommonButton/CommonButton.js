import React from 'react';
import PropTypes from 'prop-types';
import styles from './commonButton.module.css';

const CommonButton = (props) => {
  return (
    <button type={props.type}
            className={styles.btn}
            onClick={props.clickHandler}
            title={props.title}
    >
      {props.text}
    </button>
  );
};

CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  title: PropTypes.string
};

export default CommonButton;