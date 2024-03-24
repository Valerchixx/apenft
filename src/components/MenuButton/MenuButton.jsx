import styles from './MenuButton.module.css';
import PropTypes from 'prop-types';
const MenuButton = ({ children, theme, className, ...rest }) => {
  const styleToRender = {
    background: theme === 'white' ? '#ffffff1a' : '#1e1e1e1a',
  };
  const classToRender = [className, styles.button].join(' ');
  return (
    <button {...rest} style={styleToRender} className={classToRender}>
      {children}
    </button>
  );
};

MenuButton.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MenuButton;

