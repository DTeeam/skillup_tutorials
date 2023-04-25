import Proptypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propProps = {
  text: Proptypes.string,
  color: Proptypes.string,
  onClick: Proptypes.func.isRequired,
};
export default Button;
