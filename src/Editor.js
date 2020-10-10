import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import './Editor.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Editor = (props) => {
  const { language, displayName, value, onChange } = props

  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button
          type='button'
          className='button'
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >{open ? <ArrowBackIosIcon className='button-icon' /> : <ArrowForwardIosIcon className='button-icon' />}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  )
}

export default Editor
