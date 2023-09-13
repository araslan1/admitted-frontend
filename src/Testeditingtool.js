import Quill from "quill"
import "quill/dist/quill.snow.css" 
import { useState, useCallback, useRef, useEffect } from "react";
import "./Editingtool.css"; 
import goal_icon from "./images/goal_icons.png";
import support_icon from "./images/support_icon.png";
import return_icon from "./images/return_icon.png";
import person_icon from "./images/person_icon.png";
import checkmark from "./images/checkmark.png"; 
import Confirm from './Confirm';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




const Editingtool = () => {
    const history = useHistory(); 
    const [triggerLoadComments, setTriggerLoadComments] = useState(false); 
    let span_tracker = null;
    let span_tracker_comment = null;
    const [wordCount, setWordCount] = useState(0);
    const [quill, setQuill] = useState(); 
    const [comments, setComments] = useState(["Welcome to Admitted!","You've clicked on bullet point 1! This is where the essay reviewer you have been matched with will leave their comments. A link to their profile will pop on the right navigation bar for you to see who's reviewing your essay and their qualifications!","You've clicked on bullet point 2! Our mission is to provide you with high quality service and do what we can to increase your chances at getting into amazing universities.","You've clicked on bullet point 3! If you've decided to test out Admitted, go back to your dashboard, pick out your school(s) and extra services by clicking the 'New' document underneath your workspace. Unfortunately, our services do come at a cost but we've minimized our desire for profit to give you the most affordable prices while still providing high quality services."]); 
    const commentsRef = useRef(); 
    const text = 
    `Hello, welcome to our essay editing tool! This is where you'll submit your essays for review. A sentence, word, or phrase that your reviewer has left a comment on will be highlighted. When you click on any highlighted section, you will be shown which comment corresponds to the specific highlighted section you clicked on. For example, click on this sentence! There are 3 quick steps to follow:

 1. A user (you) pays for an essay review and copies the prompts/essays from their requested college into this text box. 
    
 2. Upon clicking the "submit essays for review" button, one of our essay reviewers is notified and accepts your essay review.
    
 3. Once your essays have been reviewed, all the comments will arrive right back in this document ready to be downloaded and viewed! 
    
You will be immediately notified via email when your essay has been reviewed.

Again, warm welcome to Admitted!`

    const loadComments =  () => {
        console.log("load comments called")
        let spans = document.querySelectorAll("div.ql-editor span");
        console.log(spans);
        spans.forEach((myspan, index) => {
            myspan.setAttribute("data-key", index);
            myspan.style.borderBottom = '2px solid #EA1537';
            myspan.style.paddingTop = "3.2px";
            myspan.style.paddingBottom = "3.2px";
            let find_comment_ref = () => {
                const comment = commentsRef.current.querySelector(`[data-key="${index}"]`);
                if (span_tracker){
                    span_tracker_comment.style.transform = 'none';
                    span_tracker = myspan;
        
                    span_tracker_comment = comment;
                }else{
                    span_tracker = myspan;
                    span_tracker_comment = comment;
                }
                console.log("CLICKED!");
                const textarea = comment.querySelector('.mycomments')
                if (textarea.style.display === "none"){
                    textarea.style.display ="initial"
                }
            
                comment.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                comment.style.transform = 'translateX(-15px) translateY(-8px)';
            }
            myspan.addEventListener('click', find_comment_ref);
        })
        setTriggerLoadComments(false); 
    }

    
    useEffect(() => {
        if (!quill) return;
        const text = quill.getText().trim();
        const words = text.split(/\s+/).filter((word) => word !== "");
        setWordCount(words.length);
        setTriggerLoadComments(true); 
    }, [quill])

   

    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return; 
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill(editor, { 
            theme: "snow",
            placeholder: "Type your prompt + response or paste (command+v)"
        }); 
        q.disable();
        q.setText(text); 
        q.formatText(322, 37, 'background', '#FDB5C9');
        q.formatText(396, 4, 'background', '#FDB5C9');
        q.formatText(523, 4, 'background', '#FDB5C9');
        q.formatText(655, 4, 'background', '#FDB5C9');
        q.formatText(873, 32, 'bold', true);
        setQuill(q); 
        q.enable(); 
    
    }, [text])

    return (
        <>
        <h1 className="documentName">Essay tutorial</h1>
        <div className="testeditingtool">
            <div className="container" ref={wrapperRef}>

            </div>
            <div className="word-counter">{wordCount} words</div>

            <div className="commentscontainer" ref={commentsRef}>
                {comments.map((comment, index) => (
                    <div className="comment-box" key={index} data-key={index} 
                        onMouseDown={(e) => {
                            if (!e.currentTarget.querySelector(".select_tag").contains(e.target)){
                                console.log("ocurred"); 
                                const textarea = e.currentTarget.querySelector(".mycomments");
                                setTimeout(() => {if (textarea.style.display === "none"){
                                    console.log("switch from no display to display");
                                    textarea.style.display ="initial";
                                    textarea.focus(); 
                                }else if (document.activeElement !== textarea){
                                    // textarea.blur(); 
                                    textarea.style.display ="none";
                                }}, 0);
                            }
                        }}
                        
                            >
                        <div className="type-selection">
                            <img src={checkmark} alt="" className="checkmark_comment"></img>
                            <select className="select_tag">
                                <option>Grammar Suggestion</option>
                                <option>Content Suggestion</option>
                                <option></option>
                                <option>Other Suggestion</option>
                            </select>
                        </div>
                        
                        <textarea
                            value={comment} 
                            onChange={(e) => {
                                const new_comments = [...comments]; 
                                new_comments[index] = e.target.value;
                                setComments(new_comments);        
                            }}
                            className="mycomments"
                        ></textarea>
                    </div>
                ))}
            </div>

        
            <div id ="sidenav">
                <div className = "editing_tool_buttons" onClick = {() => {
                         history.push('/dashboard');
                    }}>
                    Return Dashboard
                    <img style={{width: "20px", marginLeft: "auto"}} src={return_icon} alt="return"></img>
                </div>
                <div className = "editing_tool_buttons">
                    Meet Your Reviewer
                    <img style={{width: "20px", marginLeft: "auto"}} src={person_icon} alt="person"></img>
                </div>
                <div className = "editing_tool_buttons">
                    Goals
                    <img style={{width: "20px", marginLeft: "auto"}} src={goal_icon} alt="goal"></img>
                </div>
                <div className = "editing_tool_buttons" onClick = {() => {
   
                }}>
                    Have questions?
                    <img style={{width: "20px", marginLeft: "auto"}} src={support_icon} alt="support"></img>
                </div>
            </div> 
            {triggerLoadComments && <Confirm closeModal={setTriggerLoadComments} submitEssays={loadComments} title="Hey there! Click now to view our editing tool."/>}    
        </div>
        </>
    ); 
}   
 
export default Editingtool;