import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const UruguayOverview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          🇺🇾 Uruguay Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Strong LGBTQ+ protections</li>
              <li>Straightforward residency process</li>
              <li>High literacy and stable democracy</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold text-blue-800 mb-2">Key Considerations</h3>
            <ul className="text-sm space-y-2 text-blue-700">
              <li>Relatively small expat community</li>
              <li>Spanish language is essential</li>
              <li>Higher cost of living than some neighbors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="mr-2 text-gray-600" size={24} />
          Official Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://www.gub.uy/ministerio-interior/migraciones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            Dirección Nacional de Migración
          </a>
          <a 
            href="https://uy.usembassy.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            U.S. Embassy Uruguay
          </a>
        </div>
      </div>
    </div>
  );
};

export default UruguayOverview;
