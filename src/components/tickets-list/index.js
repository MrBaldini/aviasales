import Ticket from '../ticket';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  return (
    <ul className={classes['content__tickets-list']}>
      <li className={classes['tickets-list__ticket']}>
        <Ticket />
      </li>
    </ul>
  );
};

export default TicketsList;
