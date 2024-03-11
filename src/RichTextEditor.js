// RichTextEditor.tsx
import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button } from '@material-ui/core';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const onListClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rich Text Editor</h1>
      <div style={{ marginBottom: '10px' }}>
        <Button variant="contained" color="primary" onClick={onBoldClick}>Bold</Button>
        <Button variant="contained" color="primary" onClick={onItalicClick}>Italic</Button>
        <Button variant="contained" color="primary" onClick={onUnderlineClick}>Underline</Button>
        <Button variant="contained" color="primary" onClick={onListClick}>List</Button>
      </div>
      <div style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px' }}>
        <Editor editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand} />
      </div>
    </div>
  );
};

export default RichTextEditor;
