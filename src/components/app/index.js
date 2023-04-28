import AppHeader from '../app-header';
import AppMain from '../app-main';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className={classes.app}>
      <AppHeader />
      <AppMain />
    </div>
  );
};

export default App;
