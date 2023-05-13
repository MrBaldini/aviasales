import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import Ticket from '../ticket';
import { ticketsLoad, ticketsEmptyOn, ticketsEmptyOff } from '../../store/actions';
import { withFilterTypes, withFilterTransitions } from '../../services/functions';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketsLoad.tickets);
  const renders = useSelector((state) => state.ticketsLoad.renders);
  const filterTransitions = useSelector((state) => state.sorting.filterTransitions);
  const filterTypeTickets = useSelector((state) => state.sorting.filterTypeTickets);
  const amountTickets = useSelector((state) => state.visibilityTickets.amountTickets);
  const sortedTickets = withFilterTransitions(tickets, filterTransitions);

  const sortedFilterTypes = withFilterTypes(sortedTickets, filterTypeTickets);

  useEffect(() => {
    dispatch(ticketsLoad());
  }, []);

  useEffect(() => {
    if (!sortedFilterTypes.length && renders) {
      dispatch(ticketsEmptyOn());
    } else {
      dispatch(ticketsEmptyOff());
    }
  });

  const ticketsList = sortedFilterTypes.map((ticket, index) => {
    if (index < amountTickets) {
      return (
        <li key={ticket.id} className={cn(classes['tickets-list__ticket'])}>
          <Ticket carrier={ticket.carrier} price={ticket.price} segments={ticket.segments} />
        </li>
      );
    }
    return null;
  });

  return <ul className={cn(classes['content__tickets-list'])}>{ticketsList}</ul>;
};

export default TicketsList;
