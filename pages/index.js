import { useEffect, useState } from 'react';
import MatchSlider from '../components/MatchSlider';
import FeaturedMatch from '../components/FeaturedMatch';

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming Matches</h1>
      <MatchSlider />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {matches.map((match, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-lg font-semibold mb-1">
              {match.teams.home.name} vs {match.teams.away.name}
            </h2>
            <p className="text-sm text-gray-700">
              <strong>Date:</strong> {new Date(match.fixture.date).toLocaleString()}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Venue:</strong> {match.fixture.venue.name}
            </p>
          </div>
        ))}
      </div>
      <FeaturedMatch />
    </div>
  );
}
