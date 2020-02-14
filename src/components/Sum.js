import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  const { first, second } = props;

  return (
    <p>
      {`Sum of ${first} and ${second} is ${first + second}`}
    </p>
  );
}

Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default Sum;
