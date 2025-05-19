import { useEffect, useState } from 'react';

export default function FeaturedMatch() {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch('/api/featured')
      .then(res => res.json())
      .then(setMatch);
  }, []);

  if (!match) return <p>Loading featured match...</p>;

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold mb-2">🔥 Featured Match</h2>
      <p><strong>{match.teams}</strong></p>
      <p>{new Date(match.date).toLocaleString()}</p>
      <p>{match.venue}</p>
    </div>
  );
}
