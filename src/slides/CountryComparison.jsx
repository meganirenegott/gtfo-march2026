import React from 'react';
import { ExternalLink } from 'lucide-react';

const CountryComparison = () => {
  const data = [
    { country: 'Mexico', process: 'Residency first', time: '6-12 months', cost: 'Low-Medium', difficulty: 'Moderate' },
    { country: 'Canada', process: 'Points-based', time: '12-24 months', cost: 'High', difficulty: 'Hard' },
    { country: 'Uruguay', process: 'Direct to residency', time: '6-18 months', cost: 'Medium', difficulty: 'Moderate' },
    { country: 'Spain', process: 'Digital Nomad Visa', time: '3-6 months', cost: 'Medium', difficulty: 'Moderate' },
    { country: 'Portugal', process: 'D7 / Digital Nomad', time: '4-8 months', cost: 'Medium', difficulty: 'Moderate' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 font-serif">
          Quick Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-100">
                <th className="py-3 px-4 font-bold text-gray-700">Country</th>
                <th className="py-3 px-4 font-bold text-gray-700">Main Process</th>
                <th className="py-3 px-4 font-bold text-gray-700">Estimated Time</th>
                <th className="py-3 px-4 font-bold text-gray-700">Ease of Entry</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-800">{row.country}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{row.process}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{row.time}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      row.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {row.difficulty}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="py-4 px-4 font-bold text-gray-700 italic text-sm">Official Info</td>
                <td className="py-4 px-4 text-sm" colSpan="3">
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.gob.mx/inm" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-1" /> Mexico INM
                    </a>
                    <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-1" /> Canada IRCC
                    </a>
                    <a href="https://www.gub.uy/ministerio-interior/migraciones" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-1" /> Uruguay Migración
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 italic">
        * Timeline and ease of entry vary significantly based on individual circumstances and current policy changes.
      </div>
    </div>
  );
};

export default CountryComparison;
