import PropTypes from 'prop-types';

export default function Input() {
  return (
    <div>Input</div>
  )
}

Input.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string, 
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};
