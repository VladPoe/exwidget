import React from 'react';
import PropTypes from 'prop-types';
import astronaut from './../../assets/icons/astronaut.svg';

const MajorTom = (props) => {
  return (
    <img src={astronaut}
         style={{
           width: props.width,
           height: props.height
         }}
         alt="astronaut"
    />
  );
};

MajorTom.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

MajorTom.defaultProps = {
  width: '40px',
  height: '40px'
};

export default MajorTom;