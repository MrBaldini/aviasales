import { add, intervalToDuration } from 'date-fns';

// Функции фильтров компонента TicketsList
function withFilterTypes(tickets, filter) {
  const { btnCheap, btnFast } = filter;
  const newTickets = [];

  if (btnCheap) {
    const sortedPrice = tickets.map((ticket) => ticket.price).sort((a, b) => a - b);
    const sortedPriceNoCopies = sortedPrice.filter((item, pos) => sortedPrice.indexOf(item) === pos);

    for (let i = 0; i < sortedPriceNoCopies.length; i++) {
      tickets.forEach((ticket) => {
        if (ticket.price === sortedPriceNoCopies[i]) newTickets.push(ticket);
      });
    }

    return newTickets;
  }

  if (btnFast) {
    const sortedDurations = tickets
      .map((ticket) => ticket.segments[0].duration + ticket.segments[1].duration)
      .sort((a, b) => a - b);
    const sortedDurationsNoCopies = sortedDurations.filter((item, pos) => sortedDurations.indexOf(item) === pos);

    for (let i = 0; i < sortedDurationsNoCopies.length; i++) {
      tickets.forEach((ticket) => {
        const sumMinutes = ticket.segments[0].duration + ticket.segments[1].duration;
        if (sumMinutes === sortedDurationsNoCopies[i]) newTickets.push(ticket);
      });
    }

    return newTickets;
  }

  return tickets;
}
function withFilterTransitions(tickets, filter) {
  const allBtn = filter.btnAll.checked;
  const noneBtn = filter.btnNone.checked;
  const oneBtn = filter.btnOne.checked;
  const twoBtn = filter.btnTwo.checked;
  const threeBtn = filter.btnThree.checked;
  const arrayNone = [];
  const arrayOne = [];
  const arrayTwo = [];
  const arrayThree = [];
  let newArrayTickets = [];

  function stopsExtractor(ticket) {
    return { stopsTo: ticket.segments[0].stops, stopsBack: ticket.segments[1].stops };
  }

  if (allBtn) return tickets;

  tickets.forEach((ticket) => {
    const { stopsTo, stopsBack } = stopsExtractor(ticket);
    if (stopsTo.length === 0 || stopsBack === 0) arrayNone.push(ticket);
    if (stopsTo.length === 1 || stopsBack === 1) arrayOne.push(ticket);
    if (stopsTo.length === 2 || stopsBack === 2) arrayTwo.push(ticket);
    if (stopsTo.length === 3 || stopsBack === 3) arrayThree.push(ticket);

    return null;
  });

  if (noneBtn) newArrayTickets = [...newArrayTickets, ...arrayNone];
  if (oneBtn) newArrayTickets = [...newArrayTickets, ...arrayOne];
  if (twoBtn) newArrayTickets = [...newArrayTickets, ...arrayTwo];
  if (threeBtn) newArrayTickets = [...newArrayTickets, ...arrayThree];

  return newArrayTickets;
}

// Функции извлечения данных из билета компонента Ticket
function ticketPropertyExtractor(segments) {
  const directionOne = segments[0];
  const directionTwo = segments[1];
  const originOne = directionOne.origin;
  const destinationOne = directionOne.destination;
  const originTwo = directionTwo.origin;
  const destinationTwo = directionTwo.destination;
  const dateOne = new Date(directionOne.date);
  const dateTwo = new Date(directionTwo.date);
  const newDateOne = add(dateOne, { minutes: directionOne.duration });
  const newDateTwo = add(dateTwo, { minutes: directionTwo.duration });
  const durationOne = intervalToDuration({ start: dateOne, end: newDateOne });
  const durationTwo = intervalToDuration({ start: dateTwo, end: newDateTwo });
  const stopsTo = directionOne.stops.join(', ');
  const stopsBack = directionTwo.stops.join(', ');

  return {
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
  };
}
function stopsCounter(arr) {
  const stopsToLength = arr[0].stops.length;
  const stopsBackLength = arr[1].stops.length;
  let stopsToAmount;
  let stopsBackAmount;

  switch (stopsToLength) {
    case 0:
      stopsToAmount = 'ПЕРЕСАДОК НЕТ';
      break;
    case 1:
      stopsToAmount = '1 ПЕРЕСАДКА';
      break;
    case 2:
      stopsToAmount = '2 ПЕРЕСАДКИ';
      break;
    case 3:
      stopsToAmount = '3 ПЕРЕСАДКИ';
      break;
    default:
      return stopsToLength;
  }

  switch (stopsBackLength) {
    case 0:
      stopsBackAmount = 'ПЕРЕСАДОК НЕТ';
      break;
    case 1:
      stopsBackAmount = '1 ПЕРЕСАДКА';
      break;
    case 2:
      stopsBackAmount = '2 ПЕРЕСАДКИ';
      break;
    case 3:
      stopsBackAmount = '3 ПЕРЕСАДКИ';
      break;
    default:
      return stopsToLength;
  }

  return { stopsToAmount, stopsBackAmount };
}

// Функции установки фильтра пересадок reducer-sorting
function setCheckbox(filterType, newObject) {
  const newEntries = Object.entries(newObject).map((obj) => {
    const value = obj[1];
    if (value.btnName === 'FILTER_TRANSITIONS_ALL') value.checked = false;
    if (value.btnName === filterType) {
      value.checked = !value.checked;
    }
    return obj;
  });

  return newEntries;
}
function isToggleAllBtnNeeded(arrayEntries) {
  const newObj = Object.fromEntries(arrayEntries);
  const arrayValuesNoAll = Object.values(newObj);
  const allBtn = arrayValuesNoAll.shift();

  if (!allBtn.checked && arrayValuesNoAll.every((item) => item.checked === true)) {
    arrayEntries = Object.entries(newObj).map((obj) => {
      if (obj[1].btnName === 'FILTER_TRANSITIONS_ALL') {
        obj[1].checked = true;
      }
      return obj;
    });
  }

  return arrayEntries;
}
function toggleAllBtnsFalse(object) {
  const newEntries = Object.entries(object).map((obj) => {
    const value = obj[1];
    value.checked = false;
    return obj;
  });

  return newEntries;
}
function toggleAllBtnsTrue(object) {
  const newEntries = Object.entries(object).map((obj) => {
    const value = obj[1];
    if (value.checked === false) {
      value.checked = true;
    }
    return obj;
  });

  return newEntries;
}
function setBtnChecked(state, action) {
  const newObject = JSON.parse(JSON.stringify(state));
  const arrayValues = Object.values(newObject);
  const filter = action.type;
  let entries;

  switch (filter) {
    case 'FILTER_TRANSITIONS_ALL':
      if (arrayValues.every((item) => item.checked === true)) {
        entries = toggleAllBtnsFalse(newObject);
      } else {
        entries = toggleAllBtnsTrue(newObject);
      }
      break;
    default:
      entries = setCheckbox(filter, newObject);
  }

  isToggleAllBtnNeeded(entries);

  const newState = Object.fromEntries(entries);

  return newState;
}

export { withFilterTypes, withFilterTransitions, ticketPropertyExtractor, stopsCounter, setBtnChecked };
