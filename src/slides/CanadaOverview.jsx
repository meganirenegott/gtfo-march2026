import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const CanadaOverview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
          🇨🇦 Canada Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Visa Categories</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Express Entry:</strong> Skilled worker path</li>
              <li><strong>Work Permits:</strong> Direct employer sponsorship</li>
              <li><strong>Study Permits:</strong> Leading to post-grad work</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <h3 className="font-semibold text-red-800 mb-2">Key Considerations</h3>
            <ul className="text-sm space-y-2 text-red-700">
              <li>Points-based system (CRS score)</li>
              <li>French language skills are a major bonus</li>
              <li>High demand for healthcare and tech</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="mr-2 text-gray-600" size={24} />
          Official Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <a 
            href="https://www.canada.ca/en/immigration-refugees-citizenship.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-red-400 hover:text-red-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            IRCC Official Portal
          </a>
          <a 
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-red-400 hover:text-red-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            Express Entry Guide
          </a>
          <a 
            href="https://ca.usembassy.gov/embassy-consulates/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-red-400 hover:text-red-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            U.S. Embassy Canada
          </a>
        </div>
      </div>
    </div>
  );
};

export default CanadaOverview;
