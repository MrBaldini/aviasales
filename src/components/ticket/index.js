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

  return (
    <React.Fragment>
      <div className={cn(classes.ticket__header)}>
        <p className={cn(classes.header__title)}>{`${price} P`}</p>
        <img className={cn(classes.header__logo)} src={`https://pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={cn(classes.ticket__data)}>
        <div className={cn(classes.data__flight)}>
          <div className={cn(classes['flight__direction-time'], classes['flight-item'])}>
            <p className={cn(classes['direction-time__item-1'], classes['item-title'])}>
              {`${originOne}-${destinationOne}`}
            </p>
            <p className={cn(classes['direction-time__item-2'], classes['item-data'])}>
              {`${format(dateOne, 'HH:mm')} - ${format(newDateOne, 'HH:mm')}`}
            </p>
          </div>
          <div className={cn(classes.flight__hours, classes['flight-item'])}>
            <p className={cn(classes['hours__item-1'], classes['item-title'])}>В ПУТИ</p>
            <p className={cn(classes['hours__item-2'], classes['item-data'])}>
              {`${durationOne.hours}ч ${durationOne.minutes}м`}
            </p>
          </div>
          <div className={cn(classes.flight__transitions, classes['flight-item'])}>
            <p className={cn(classes['transitions__item-1'], classes['item-title'])}>{countStops.stopsToAmount}</p>
            <p className={cn(classes['transitions__item-2'], classes['item-data'])}>{stopsTo || 'Прямой'}</p>
          </div>
        </div>
        <div className={classes.data__flight}>
          <div className={cn(classes['flight__direction-time'], classes['flight-item'])}>
            <p className={cn(classes['direction-time__item-1'], classes['item-title'])}>
              {`${originTwo}-${destinationTwo}`}
            </p>
            <p className={cn(classes['direction-time__item-2'], classes['item-data'])}>
              {`${format(dateTwo, 'HH:mm')} - ${format(newDateTwo, 'HH:mm')}`}
            </p>
          </div>
          <div className={cn(classes.flight__hours, classes['flight-item'])}>
            <p className={cn(classes['hours__item-1'], classes['item-title'])}>В ПУТИ</p>
            <p className={cn(classes['hours__item-2'], classes['item-data'])}>
              {`${durationTwo.hours}ч ${durationTwo.minutes}м`}
            </p>
          </div>
          <div className={cn(classes.flight__transitions, classes['flight-item'])}>
            <p className={cn(classes['transitions__item-1'], classes['item-title'])}>{countStops.stopsBackAmount}</p>
            <p className={cn(classes['transitions__item-2'], classes['item-data'])}>{stopsBack || 'Прямой'}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ticket;
