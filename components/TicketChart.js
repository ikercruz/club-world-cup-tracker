import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TicketChart() {
  const [data, setData] = useState({
    labels: ['New York', 'Miami', 'Dallas', 'Los Angeles'],
    datasets: [{
      label: 'Ticket Listings',
      data: [30, 45, 22, 50],
      backgroundColor: 'rgba(59, 130, 246, 0.5)'
    }]
  });

  return (
    <div className="mt-8 bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">Ticket Listings by City</h2>
      <Bar data={data} />
    </div>
  );
}
