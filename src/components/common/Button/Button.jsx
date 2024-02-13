import PropTypes from 'prop-types';

export default function Button({ style , text, action = null }) {

  return (
    <div>
      <button
        className={style}
        onClick={action ? () => action() : undefined}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  style:PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  action: PropTypes.func,
};
