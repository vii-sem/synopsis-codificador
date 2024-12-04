import React, { useState } from 'react';
import Editor from './Editor';
function App() {
  
  const [ html, sethtml ] = useState('')
  const [ css, setcss ] = useState('')
  const [ javascript, setjavascript ] = useState('')

  return (
    <>
    <div className="top-pane">
      <Editor 
      language='xml'
      displayName='HTML'
      value={html}
      onChange={sethtml}
      />
      <Editor 
      language='css'
      displayName='CSS'
      value={css}
      onChange={sethtml}
      />
      <Editor 
      language='javascript'
      displayName='JavaScript'
      value={javascript}
      onChange={sethtml}
      />
    </div>
    <div className="pane">
      <iframe 
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      />
        
    </div>
    </>
  );
}

export default App;
