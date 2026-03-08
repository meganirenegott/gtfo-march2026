import React from 'react';
import { ExternalLink } from 'lucide-react';

const ExtendedStayCountries = () => {
  const countries = [
    { country: "Marshall Islands", requirement: "Visa not required", stay: "Unlimited", notes: "Compact of Free Association with US" },
    { country: "Micronesia", requirement: "Visa not required", stay: "365 days", notes: "Compact of Free Association with US" },
    { country: "Albania", requirement: "Visa not required", stay: "1 year", notes: "Must leave for 90 days to reset" },
    { country: "Georgia", requirement: "Visa not required", stay: "1 year", notes: "-" },
    { country: "Palau", requirement: "Visa not required", stay: "1 year", notes: "Compact of Free Association with US" },
    { country: "Bahamas", requirement: "Visa not required", stay: "8 months", notes: "Passport card valid for sea travel" },
    { country: "Antigua and Barbuda", requirement: "Visa not required", stay: "6 months", notes: "Proof of funds/return ticket required" },
    { country: "Armenia", requirement: "Visa not required", stay: "180 days", notes: "-" },
    { country: "Barbados", requirement: "Visa not required", stay: "6 months", notes: "-" },
    { country: "Belize", requirement: "Visa not required", stay: "180 days", notes: "Mandatory car disinfection at border" },
    { country: "Canada", requirement: "Visa not required", stay: "6 months", notes: "Criminal record may bar entry; Passport Card valid for land/sea" },
    { country: "Dominica", requirement: "Visa not required", stay: "6 months", notes: "-" },
    { country: "El Salvador", requirement: "Visa not required", stay: "180 days", notes: "CA-4 Free Mobility Agreement (90 days total in CA-4)" },
    { country: "Jamaica", requirement: "Visa not required", stay: "6 months", notes: "Departure tax by airline" },
    { country: "Latvia", requirement: "Visa not required", stay: "180 days", notes: "90 days in Schengen + 90 additional days in Latvia" },
    { country: "Mexico", requirement: "Visa not required", stay: "180 days", notes: "FMM required; Passport Card valid for land/sea" },
    { country: "Panama", requirement: "Visa not required", stay: "180 days", notes: "Criminal conviction may bar entry" },
    { country: "United Kingdom", requirement: "ETA required", stay: "6 months", notes: "Electronic Travel Authorization required" }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-bold text-blue-900 mb-2 text-sm">Extended Stay Options for U.S. Citizens</h4>
        <p className="text-blue-800 text-xs">
          These countries offer visa-free stays of 6 months or longer for U.S. passport holders.
          This makes them excellent options for extended stays or potential relocation planning.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-3 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th className="p-2 border-b text-left">Country</th>
              <th className="p-2 border-b text-left">Stay Limit</th>
              <th className="p-2 border-b text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-2 border-b font-medium">{item.country}</td>
                <td className="p-2 border-b">{item.stay}</td>
                <td className="p-2 border-b text-gray-500">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between text-xs border border-blue-100">
        <span className="text-blue-800 flex items-center">
          <ExternalLink size={14} className="mr-2" />
          Check current entry requirements for your specific situation
        </span>
        <a 
          href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition shadow-sm font-medium"
        >
          State Dept. Travel Info
        </a>
      </div>
    </div>
  );
};

export default ExtendedStayCountries;
