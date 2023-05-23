import React from 'react';
import { format } from 'date-fns';
import cn from 'classnames';

import { ticketPropertyExtractor, stopsCounter } from '../../services/functions';

import classes from './ticket.module.scss';

const Ticket = ({ carrier, price, segments }) => {
  const {
    originOne,
    originTwo,
    destinationOne,
    destinationTwo,
    dateOne,
    dateTwo,
    newDateOne,
    newDateTwo,
    durationOne,
    durationTwo,
    stopsTo,
    stopsBack,
  } = ticketPropertyExtractor(segments);
  const countStops = stopsCounter(segments);

  const flights = segments.map((el, i) => {
    const origin = i === 0 ? originOne : originTwo;
    const destination = i === 0 ? destinationOne : destinationTwo;
    const date = i === 0 ? dateOne : dateTwo;
    const newDate = i === 0 ? newDateOne : newDateTwo;
    const duration = i === 0 ? durationOne : durationTwo;
    const stopsAmount = i === 0 ? countStops.stopsToAmount : countStops.stopsBackAmount;
    const stopsName = i === 0 ? stopsTo : stopsBack;

    return (
      <div key={i} className={cn(classes.data__flight)}>
        <div className={cn(classes['flight__direction-time'], classes['flight-item'])}>
          <p className={cn(classes['direction-time__item-1'], classes['item-title'])}>{`${origin}-${destination}`}</p>
          <p className={cn(classes['direction-time__item-2'], classes['item-data'])}>
            {`${format(date, 'HH:mm')} - ${format(newDate, 'HH:mm')}`}
          </p>
        </div>
        <div className={cn(classes.flight__hours, classes['flight-item'])}>
          <p className={cn(classes['hours__item-1'], classes['item-title'])}>В ПУТИ</p>
          <p className={cn(classes['hours__item-2'], classes['item-data'])}>
            {`${duration.hours}ч ${duration.minutes}м`}
          </p>
        </div>
        <div className={cn(classes.flight__transitions, classes['flight-item'])}>
          <p className={cn(classes['transitions__item-1'], classes['item-title'])}>{stopsAmount}</p>
          <p className={cn(classes['transitions__item-2'], classes['item-data'])}>{stopsName || 'Прямой'}</p>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className={cn(classes.ticket__header)}>
        <p className={cn(classes.header__title)}>{`${price} P`}</p>
        <img className={cn(classes.header__logo)} src={`https://pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={cn(classes.ticket__data)}>{flights}</div>
    </React.Fragment>
  );
};

export default Ticket;
