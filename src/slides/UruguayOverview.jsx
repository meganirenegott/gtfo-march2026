import React from 'react';

const UruguayOverview = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-gray-900 p-4 rounded-lg text-center">
        <h3 className="text-2xl font-bold">🇺🇾 URUGUAY</h3>
        <p className="text-sm mt-1">"Switzerland of South America"</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
        <h4 className="font-bold text-blue-900">Why Uruguay?</h4>
        <ul className="text-sm text-blue-800 mt-2 space-y-1">
          <li>✓ Most straightforward residency in Latin America</li>
          <li>✓ Strong LGBT protections (2nd in Americas to legalize same-sex marriage)</li>
          <li>✓ Stable democracy, low corruption</li>
          <li>✓ Universal healthcare, high literacy (98.4%)</li>
          <li>✓ Lower cost of living than U.S.</li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Tourist Entry</div>
          <div className="text-2xl font-bold text-blue-600">90 days</div>
          <div className="text-gray-600">No visa required</div>
        </div>
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Citizenship Wait</div>
          <div className="text-2xl font-bold text-green-600">3-5 yrs</div>
          <div className="text-gray-600">After residency</div>
        </div>
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Min. Income</div>
          <div className="text-2xl font-bold text-purple-600">~$1,500</div>
          <div className="text-gray-600">per month</div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Application Must Be Done IN Uruguay</h4>
        <ol className="text-xs space-y-1 list-decimal list-inside">
          <li>Enter as tourist</li>
          <li>Find local address, register with police</li>
          <li>Schedule residency interview</li>
          <li>Submit documents (apostilled, translated to Spanish)</li>
          <li>Receive "Residente en trámite" status (resident rights while processing)</li>
          <li>Get Cédula (Uruguayan ID card)</li>
        </ol>
      </div>

      <div className="bg-red-50 p-3 rounded text-xs">
        <strong>Physical Presence:</strong> Must spend at least 6 months/year in Uruguay to maintain residency
      </div>

      <div className="bg-green-50 p-3 rounded text-xs">
        <strong>Passport Benefits:</strong> Uruguayan passport = visa-free access to 150+ countries 
        (Schengen, UK, Japan)
      </div>
    </div>
  );
};

export default UruguayOverview;
