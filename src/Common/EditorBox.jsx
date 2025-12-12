import React, { useState, useRef } from "react";
import "./EditorBox.css";

const EditorBox = ({ initialValue = "" }) => {
  const [mode, setMode] = useState("view"); // view | edit | preview
  const [savedText, setSavedText] = useState(initialValue);
  const [draftText, setDraftText] = useState(initialValue);
  const editorRef = useRef(null);

  const execCommand = (cmd, v = null) => {
    document.execCommand(cmd, false, v);
    const newHtml = editorRef.current.innerHTML;
    setDraftText(newHtml);
  };

  const handleInput = () => {
    const newHtml = editorRef.current.innerHTML;
    setDraftText(newHtml);
  };

  const saveContent = () => {
    setSavedText(draftText);
    setMode("view");
  };

  return (
    <div className="editor-wrapper">

      {/* ==================== VIEW MODE ==================== */}
      {mode === "view" && (
        <div className="saved-box">
          <div
            className="saved-content"
            dangerouslySetInnerHTML={{ __html: savedText }}
          ></div>

          <button className="edit-btn" onClick={() => setMode("edit")}>
            Edit
          </button>
        </div>
      )}

      {/* ==================== EDIT MODE ==================== */}
      {mode === "edit" && (
        <div className="edit-area">
          <div className="toolbar">
            <button onClick={() => execCommand("undo")}>↺</button>
            <button onClick={() => execCommand("redo")}>↻</button>
            <button onClick={() => execCommand("bold")}><b>B</b></button>
            <button onClick={() => execCommand("italic")}><i>I</i></button>
            <button onClick={() => execCommand("underline")}><u>U</u></button>
            <button onClick={() => execCommand("insertOrderedList")}>OL</button>
            <button onClick={() => execCommand("insertUnorderedList")}>UL</button>
            <button
              onClick={() => {
                const url = prompt("Enter URL:");
                if (url) execCommand("createLink", url);
              }}
            >
              Link
            </button>
          </div>

          <div
            ref={editorRef}
            className="editor"
            contentEditable
            dangerouslySetInnerHTML={{ __html: draftText }}
            onInput={handleInput}
          ></div>

          <div className="action-row">
            <button className="preview-btn" onClick={() => setMode("preview")}>
              👁 View live
            </button>
            <button className="save-btn" onClick={saveContent}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setMode("view")}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ==================== PREVIEW MODE ==================== */}
      {mode === "preview" && (
        <div className="preview-box">
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: draftText }}
          ></div>

          <div className="action-row">
            <button className="back-btn" onClick={() => setMode("edit")}>
              Back to Edit
            </button>
            <button className="save-btn" onClick={saveContent}>
              Save
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditorBox;
