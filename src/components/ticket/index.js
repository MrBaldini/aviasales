import React from 'react';

import classes from './ticket.module.scss';
import s7Logo from './S7.svg';

const Ticket = () => {
  console.log(classes);
  return (
    <React.Fragment>
      <div className={classes.ticket__header}>
        <p className={classes.header__title}>13 400 P</p>
        <img className={classes.header__logo} src={s7Logo} />
      </div>
      <div className={classes.ticket__data}>
        <div className={classes.data__flight}>
          <div className={`${classes['flight__direction-time']} ${classes['flight-item']}`}>
            <p className={`${classes['direction-time__item-1']} ${classes['item-title']}`}>MOW-HKT</p>
            <p className={`${classes['direction-time__item-2']} ${classes['item-data']}`}>10:45 - 08:00</p>
          </div>
          <div className={`${classes.flight__hours} ${classes['flight-item']}`}>
            <p className={`${classes['hours__item-1']} ${classes['item-title']}`}>В ПУТИ</p>
            <p className={`${classes['hours__item-2']} ${classes['item-data']}`}>21ч 15м</p>
          </div>
          <div className={`${classes.flight__transitions} ${classes['flight-item']}`}>
            <p className={`${classes['transitions__item-1']} ${classes['item-title']}`}>2 ПЕРЕСАДКИ</p>
            <p className={`${classes['transitions__item-2']} ${classes['item-data']}`}>HKG, JNB</p>
          </div>
        </div>
        <div className={classes.data__flight}>
          <div className={`${classes['flight__direction-time']} ${classes['flight-item']}`}>
            <p className={`${classes['direction-time__item-1']} ${classes['item-title']}`}>MOW-HKT</p>
            <p className={`${classes['direction-time__item-2']} ${classes['item-data']}`}>10:45 - 08:00</p>
          </div>
          <div className={`${classes.flight__hours} ${classes['flight-item']}`}>
            <p className={`${classes['hours__item-1']} ${classes['item-title']}`}>В ПУТИ</p>
            <p className={`${classes['hours__item-2']} ${classes['item-data']}`}>21ч 15м</p>
          </div>
          <div className={`${classes.flight__transitions} ${classes['flight-item']}`}>
            <p className={`${classes['transitions__item-1']} ${classes['item-title']}`}>2 ПЕРЕСАДКИ</p>
            <p className={`${classes['transitions__item-2']} ${classes['item-data']}`}>HKG, JNB</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ticket;
