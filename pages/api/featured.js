export default async function handler(req, res) {
  try {
    const response = await fetch('https://v3.football.api-sports.io/fixtures?league=1&season=2022', {
      headers: {
        'x-apisports-key': process.env.FOOTBALL_API_KEY
      }
    });

    const data = await response.json();

    const matches = data.response;

    if (!matches || matches.length === 0) {
      return res.status(404).json({ error: 'No matches found' });
    }

    const randomMatch = matches[Math.floor(Math.random() * matches.length)];

    const featured = {
      teams: `${randomMatch.teams.home.name} vs ${randomMatch.teams.away.name}`,
      date: randomMatch.fixture.date,
      venue: randomMatch.fixture.venue.name
    };

    res.status(200).json(featured);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch featured match', details: err.message });
  }
}
