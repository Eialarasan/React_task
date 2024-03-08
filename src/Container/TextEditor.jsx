import React, { useState } from "react";

const TextEditor = () => {

    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [text, setText] = useState('');
    const [color, setColor] = useState('')
    const [fontStyle, setFontStyle] = useState('')
    const [size, setSize] = useState('')
    const [underlined, setUnderlined] = useState(false)


    const handleBoldClick = () => {
        if (!bold) {
            setBold(true);
        } else {
            setBold(false)
        }

    };

    const handleUnderClick = () => {
        if (!underlined) {
            setUnderlined(true);
        } else {
            setUnderlined(false)
        }    };

    const handleItalicClick = () => {
        if (!italic) {
            setItalic(true);
        } else {
            setItalic(false)
        }
    };

    const handleFontColor = (e) => {
        console.log(e, "kjhg")
        setColor(e)
    }

    return <div class="container mt-5">
        <h1 class="text-center mb-4">Text Editor</h1>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="editor border p-3">
                    <div className="row">
                        <div className="col-2">
                            <button type="button" class="btn btn-secondary" onClick={() => handleBoldClick()}>B</button>
                            <p>Bold</p>
                        </div>
                        <div className="col-2">
                            <button type="button" class="btn btn-secondary" onClick={() => handleItalicClick()}>I</button>
                            <p>Italic</p>
                        </div>
                        <div className="col-2">
                            <button type="button" class="btn btn-secondary" onClick={() => handleUnderClick()}>U</button>
                            <p>Underline</p>
                        </div>
                        <div className="col-2">
                            <input className="form-control" type="color" id="colorPicker" class="mb-3" onClick={(e) => handleFontColor(e.target.value)} />
                            <p>Color</p>
                        </div>
                        <div className="col-2">
                            <select class="form-control mb-3" value={fontStyle} onChange={(e) => setFontStyle(e?.target.value)}>
                                <option value="Arial, sans-serif">Arial</option>
                                <option value="Times New Roman, Times, serif">Times New Roman</option>
                                <option value="Century Gothic, sans-serif">Century Gothic</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select class="form-control mb-3" value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="10px">Small</option>
                                <option value="15px">Normal</option>
                                <option value="25px">Large</option>
                            </select>
                        </div>                   </div>


                    <div contenteditable="true" class="form-control" style={{ "min-height": " 200px" }}>
                        <div class="editor  p-3">
                            <textarea class="form-control" rows="10" style={{
                                fontWeight: bold ? 'bold' : 'normal', fontStyle: italic ? "italic" : "normal",
                                color: color, fontFamily: fontStyle, fontSize: size, textDecoration: underlined ? 'underline' : ''
                            }}
                                value={text}
                                onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default TextEditor