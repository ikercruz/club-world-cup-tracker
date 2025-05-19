export default async function handler(req, res) {
    try {
      const response = await fetch('https://v3.football.api-sports.io/fixtures?league=1&season=2022', {
        headers: {
          'x-apisports-key': process.env.FOOTBALL_API_KEY
        }
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch match data' });
      }
  
      const data = await response.json();
  
      // 👇 Add this line here
      console.log("API result:", data);
  
      res.status(200).json(data.response);  // This is the list of matches
    } catch (err) {
      res.status(500).json({ error: 'Server error', details: err.message });
    }
  }
  