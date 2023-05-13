import cn from 'classnames';

import logo from './Logo.svg';
import classes from './app-header.module.scss';

const AppHeader = () => {
  return (
    <div className={cn(classes.app__header)}>
      <img className={cn(classes.header__logo)} src={logo} />
    </div>
  );
};

export default AppHeader;
