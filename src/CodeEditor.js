// CodeEditor.js
import React, { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [isLocked, setLocked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  };

  const handleSave = () => {
    // Implement code saving functionality here
    alert('Code saved');
  };

  const handleLock = () => {
    setLocked(!isLocked);
  };

  return (
    <div className={`code-editor ${isLocked ? 'locked' : ''}`}>
      <div className="toolbar">
        <button onClick={handleCopy} className="btn">Copy</button>
        <button onClick={handleSave} className="btn">Save</button>
        <button onClick={handleLock} className="btn">{isLocked ? 'Unlock' : 'Lock'}</button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="code-input"
        placeholder="Enter your code here"
        readOnly={isLocked}
      />
    </div>
  );
}

export default CodeEditor;
