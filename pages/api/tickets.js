export default async function handler(req, res) {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=world+cup&countryCode=US&apikey=${process.env.TICKETMASTER_API_KEY}`;
  
    const response = await fetch(url);
  
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch ticket data' });
    }
  
    const data = await response.json();
    res.status(200).json(data._embedded?.events || []);
  }
  