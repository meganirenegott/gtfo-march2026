import React from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GenderMarkerChanges = () => {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
        <div className="flex items-start">
          <AlertCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <div>
            <h3 className="text-red-800 font-bold">Supreme Court Stay (March 2026)</h3>
            <p className="text-red-700 text-sm mt-1">
              On November 6, 2025, the U.S. Supreme Court stayed the Orr v. Trump injunction. 
              <strong> The State Department is no longer processing gender marker changes.</strong> 
              All passports must now list sex assigned at birth.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Current Policy</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="bg-gray-100 p-1 rounded mr-2 mt-0.5">•</span>
              New passports must match sex assigned at birth.
            </li>
            <li className="flex items-start">
              <span className="bg-gray-100 p-1 rounded mr-2 mt-0.5">•</span>
              Renewals will revert to birth sex if previously changed.
            </li>
            <li className="flex items-start">
              <span className="bg-gray-100 p-1 rounded mr-2 mt-0.5">•</span>
              X gender markers are no longer available for new applications.
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Existing Documents</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-700 p-1 rounded mr-2 mt-0.5">✓</span>
              Existing passports remain valid until expiration.
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-100 text-yellow-700 p-1 rounded mr-2 mt-0.5">!</span>
              TSA neutral scanners are still in use domestically.
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-700 p-1 rounded mr-2 mt-0.5">⚠</span>
              CBP manifests now only accept M or F for international flights.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h4 className="font-bold text-blue-900 mb-4">Detailed Guidance</h4>
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link 
            to="/gender-marker" 
            className="flex items-center justify-center p-3 bg-white rounded border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors shadow-sm"
          >
            Full Sex Marker Deep-Dive
          </Link>
          <a 
            href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-white rounded border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors shadow-sm"
          >
            <ExternalLink size={16} className="mr-2" />
            Official State Dept Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenderMarkerChanges;
