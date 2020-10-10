import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [html, setHtml] = useState('html', '')
  const [css, setCss] = useState('css', '')
  const [js, setJs] = useState('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 200)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="app">
      <div className='pane top-pane'>
        <Editor
          language='xml'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-script'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default App;