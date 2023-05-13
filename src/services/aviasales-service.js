export default class AviasalesService {
  searchId = null;

  ticketId = 0;

  setIdsToTickets = (obj) => {
    obj.tickets.map((ticket) => {
      ticket.id = this.ticketId;
      this.ticketId += 1;
      return ticket;
    });
  };

  getSearchId = async () => {
    const responseInitSearch = await fetch('https://aviasales-test-api.kata.academy/search');
    await responseInitSearch.json().then((obj) => {
      this.searchId = obj.searchId;
    });
  };

  getTickets = async () => {
    const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchId}`);

    if (responseTickets.status === 500) throw new Error('Error code 500.');

    const objTickets = {};
    await responseTickets.json().then((obj) => {
      objTickets.stop = obj.stop;
      objTickets.tickets = obj.tickets;
    });

    this.setIdsToTickets(objTickets);

    return objTickets;
  };
}
