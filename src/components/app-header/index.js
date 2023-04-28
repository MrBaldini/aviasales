import logo from './Logo.svg';
import classes from './app-header.module.scss';

const AppHeader = () => {
  return (
    <div className={classes.app__header}>
      <img className={classes.header__logo} src={logo} />
    </div>
  );
};

export default AppHeader;
