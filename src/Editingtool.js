import Quill from "quill"
import "quill/dist/quill.snow.css" 
import { useState, useCallback } from "react";
import "./Editingtool.css"; 



const Editingtool = () => {
    const [wordCount, setWordCount] = useState(0);

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return; 
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        const quill = new Quill(editor, { 
            theme: "snow",
            placeholder: "Type your prompt + response or paste (command+v)"
        });

        quill.on("text-change", () => {
            const text = quill.getText().trim();
            const words = text.split(/\s+/).filter((word) => word !== "");
            setWordCount(words.length);
          });

        quill.focus(); //mouse   
    }, [])


    return (
        <>
            <div className="container" id="hello" ref={wrapperRef}>

            </div>
            <div className="word-counter">{wordCount} words</div>
            <h2>All comments</h2>
        </>
    ); 
}   
 
export default Editingtool;