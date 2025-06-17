function filterTicket(ticketData, searchTerm){
    let filteredTickets
    if(ticketData && Array.isArray(ticketData.data?.data)){
  filteredTickets = (ticketData.data?.data || []).filter(
   (ticket) =>
     ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (ticket.description && ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
);
return filteredTickets
    }
    return []
   
}

export {filterTicket}
