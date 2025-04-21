import React, { useState } from 'react';
import './Terminal.css';

function TerminalUI() {
  const [logs, setLogs] = useState(['Welcome to Cloud Notes!']);
  const [command, setCommand] = useState('');

  const runCommand = () => {
    setLogs([...logs, `> ${command}`, `Executed: ${command}`]);
    setCommand('');
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {logs.map((line, i) => <div key={i}>{line}</div>)}
      </div>
      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && runCommand()}
        placeholder="Type a command"
      />
    </div>
  );
}

export default TerminalUI;
