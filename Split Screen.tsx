import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import FormGenerator from './FormGenerator';

export const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="border-r">
        <JsonEditor onChange={setSchema} />
      </div>
      <div className="p-4">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};


