import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const MexicoOverview = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
        <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
          🇲🇽 Mexico Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">Visa Types</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Temporary Resident:</strong> 1-4 years stay</li>
              <li><strong>Permanent Resident:</strong> Indefinite stay</li>
              <li><strong>Digital Nomad:</strong> Under the Temp Resident umbrella</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="font-semibold text-green-800 mb-2">Key Considerations</h3>
            <ul className="text-sm space-y-2 text-green-700">
              <li>Relatively low cost of living</li>
              <li>Accessible financial requirements for many</li>
              <li>Excellent healthcare in major cities</li>
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
            href="https://www.gob.mx/inm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-green-400 hover:text-green-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            Instituto Nacional de Migración
          </a>
          <a 
            href="https://consulmex.sre.gob.mx/sanfrancisco/index.php/visas-ingles" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-green-400 hover:text-green-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            Consular Services Guide
          </a>
          <a 
            href="https://mx.usembassy.gov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 bg-white rounded border border-gray-200 hover:border-green-400 hover:text-green-600 transition-colors shadow-sm"
          >
            <ExternalLink className="mr-2" size={18} />
            U.S. Embassy Mexico
          </a>
        </div>
      </div>
    </div>
  );
};

export default MexicoOverview;
