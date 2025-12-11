import React from 'react';

const MexicoOverview = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-400 to-red-400 text-blue-900 p-4 rounded-lg text-center">
        <h3 className="text-2xl font-bold">🇲🇽 MEXICO</h3>
        <p className="text-sm mt-1">Temporary Resident Visa (Digital Nomad Alternative)</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-600 mb-1">DURATION</div>
          <div className="text-lg font-bold">1 year</div>
          <div className="text-xs text-gray-600">Renewable up to 4 years total</div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-3">
          <div className="text-xs text-gray-600 mb-1">PROCESSING TIME</div>
          <div className="text-lg font-bold">2-6 weeks</div>
          <div className="text-xs text-gray-600">Plus registration in Mexico</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded">
        <h4 className="font-bold mb-2">Financial Requirements (Choose ONE):</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center bg-white p-2 rounded">
            <span>Monthly income (6 months):</span>
            <span className="font-bold">$3,737.95 USD</span>
          </div>
          <div className="flex justify-between items-center bg-white p-2 rounded">
            <span>Savings (12 months):</span>
            <span className="font-bold">$73,257.65 USD</span>
          </div>
          <div className="flex justify-between items-center bg-white p-2 rounded">
            <span>Mexican property value:</span>
            <span className="font-bold">$346,000+ USD</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-2">Add ~$861 per dependent</p>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-green-50 p-2 rounded">
          <div className="font-bold text-green-900">✓ You CAN:</div>
          <ul className="text-green-800 mt-1 space-y-1">
            <li>• Work remotely for foreign employers</li>
            <li>• Open bank accounts</li>
            <li>• Travel freely</li>
            <li>• Access healthcare</li>
          </ul>
        </div>
        <div className="bg-red-50 p-2 rounded">
          <div className="font-bold text-red-900">✗ You CANNOT:</div>
          <ul className="text-red-800 mt-1 space-y-1">
            <li>• Work for Mexican companies</li>
            <li>• Take local jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MexicoOverview;
