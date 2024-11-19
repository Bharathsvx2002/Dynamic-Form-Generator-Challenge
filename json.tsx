import React, { useState } from 'react';

import Ajv from 'ajv';
import { App } from '../Split Screen';

const ajv = new Ajv();

const JsonEditor: React.FC<{ onChange: (json: object) => void }> = ({ onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    try {
      const parsed = JSON.parse(value || '{}');
      setError(null);
      onChange(parsed);
    } catch (e) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="editor">
      
        height="100%"
        defaultLanguage="json"
        
        theme="vs-dark"
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};



