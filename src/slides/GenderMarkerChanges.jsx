import React from 'react';

const GenderMarkerChanges = () => {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
        <h4 className="font-bold text-yellow-900 mb-2">⚠️ Important</h4>
        <p className="text-yellow-800 text-sm">
          Current policy is under active litigation. Higher court decisions could change access immediately.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h4 className="font-bold mb-3">How to Apply with Correct Gender Marker:</h4>
        <ol className="space-y-2 text-sm list-decimal list-inside">
          <li>Download the appropriate form: DS-11 (new), DS-82 (renewal), or DS-5504 (correction)</li>
          <li>Complete the <strong>attestation form</strong> (identifies you as eligible class member)</li>
          <li>For <strong>M or F</strong>: Mark on both attestation and application</li>
          <li>For <strong>X</strong>: Leave sex field blank on application, mark only on attestation</li>
          <li>Submit all documents together</li>
        </ol>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-bold text-green-900 mb-2">✓ Good News</h4>
        <p className="text-green-800 text-sm">
          <strong>All currently valid passports remain valid</strong> until expiration, including those 
          with X markers or gender markers different from sex assigned at birth (per ICAO policy).
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-600 bg-gray-50 p-3 rounded">
        <strong>Pro Tip:</strong> Carry a printout of the State Department's webpage confirming 
        passport validity when traveling internationally.
      </div>
    </div>
  );
};

export default GenderMarkerChanges;
