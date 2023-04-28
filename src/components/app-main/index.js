import FilterTransitions from '../filter-transitions';
import FilterTypes from '../filter-types';
import ShowMoreBtn from '../show-more-btn';
import TicketsList from '../tickets-list';

import classes from './app-main.module.scss';

const AppMain = () => {
  return (
    <div className={classes.app__main}>
      <FilterTransitions />
      <div className={classes.main__content}>
        <FilterTypes />
        <TicketsList />
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default AppMain;
