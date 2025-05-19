import { useEffect, useState } from 'react';
import TicketChart from '../components/TicketChart';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('/api/tickets')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Tickets</h1>
      <ul>
        {tickets.map((event, i) => (
          <li key={i} className="mb-4">
            <strong>{event.name}</strong><br />
            {new Date(event.dates.start.dateTime).toLocaleString()}<br />
            Venue: {event._embedded.venues[0].name}<br />
            <a href={event.url} className="text-blue-600" target="_blank" rel="noreferrer">Buy Tickets</a>
          </li>
        ))}
      </ul>
      <TicketChart />
    </div>
  );
}
