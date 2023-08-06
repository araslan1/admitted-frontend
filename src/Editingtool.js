import Quill from "quill"
import "quill/dist/quill.snow.css" 
import { useState, useCallback, useEffect, useRef } from "react";
import "./Editingtool.css"; 
import { useParams, useHistory} from "react-router-dom"; 
import { io } from 'socket.io-client';
import axios from 'axios';
import stick_figure from "./images/sleeping.png";
import clouds_figure from "./images/clouds.png"; 
import checkmark from "./images/checkmark.png"; 
import Cookies from "universal-cookie"; 
import Confirm from './Confirm';
import goal_icon from "./images/goal_icons.png";
import support_icon from "./images/support_icon.png";
import return_icon from "./images/return_icon.png";
import person_icon from "./images/person_icon.png";
import congrats_on_submitting from "./images/editingToolSubmitted4.png";
const cookies = new Cookies(); 



const Editingtool = () => {
    // // get token generated on login
    // const [ cleared, setCleared ] = useState(false);
    const [triggerLoadComments, setTriggerLoadComments] = useState(false); 
    const [documentHasLoaded, setDocumentHasLoaded] = useState(false); 
    const [savingCommentsInProgress, setSavingCommentsInProgress] = useState(false); 
    const [userHasSubmitted, setUserHasSubmitted] = useState(null); 
    const [isReviewer, setIsReviewer] = useState(false);
    const [essaysReviewed, setEssaysReviewed] = useState(false); 
    const [confirmationOpen, setConfirmationOpen] = useState(false); 
    const token = cookies.get("TOKEN");
    const [wordCount, setWordCount] = useState(0);
    const {id: documentId} = useParams(); //contains url id
    const [socket, setSocket] = useState(); 
    const [quill, setQuill] = useState(); 
    const [comments, setComments] = useState([]); 
    const SAVE_INTERVAL_MS =  4000; 
    const commentsRef = useRef(); 
    let span_tracker = null;
    let span_tracker_comment = null;
    const clear_formatting = () => {
        var length = quill.getLength()
        quill.removeFormat(0, length)
    }
    const history = useHistory(); 

    const submitEssays = async () => {
        setUserHasSubmitted(true);
        // Get the current date and time
        const currentDate = new Date();

        // Add 5 days (5 * 24 * 60 * 60 * 1000 milliseconds) to the current date
        const dueDate = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000);
        console.log('wassup'); 
        console.log(typeof dueDate);
        const configuration = {
            method: 'post',
            url: `${process.env.REACT_APP_SERVER_URL}/editingtool/${documentId}`,
            data: {
                userHasSubmitted: true,
                essaysReviewed: essaysReviewed,  
                dueBy: dueDate, 
            }
        };
        
        await axios(configuration)
            .then(() => {
                console.log("essay has been submitted!");
            })
            .catch(() => {
                console.log("error submitting essays");
            })
        
        clear_formatting(); 
        setConfirmationOpen(false);
        //add nodemailer code here!
    }

    useEffect(() => {
        var animateButton = function(e) {
            e.preventDefault();
            //reset animation
            e.target.classList.remove('animate');
            
            e.target.classList.add('animate');
            setTimeout(function(){
                e.target.classList.remove('animate');
            },700);
        };

        var bubblyButtons = document.getElementsByClassName("bubbly-button");

        for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener('click', animateButton, false);
        }

        const configuration = {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/auth-editingtool/${documentId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    
        axios(configuration)
            .then((response) => {
                // setIsReviewer(response.data.isReviewer)
                setUserHasSubmitted(response.data.userHasSubmitted); 
                setIsReviewer(response.data.isReviewer);
                if (response.data.userHasSubmitted){
                    console.log("cleared set to")
                    // setCleared(true); 
                }
                setEssaysReviewed(response.data.essaysReviewed);
                console.log("hurray, given access to editing tool!")
            })
            .catch((error) => {
                console.log("you do not have access to editing tool")
                console.log(error);
                error = new Error(); 
                if (token){
                    cookies.remove("TOKEN", { path: '/' });
                }
                history.push("/login"); 
            });
    }, [documentId, history, token]);



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
        
    }
    
    const save_comments = useCallback(() => {
        try {
            setSavingCommentsInProgress(true); 
            const comments_config = {
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}/comments`,
                data: {
                    _id: documentId,
                    comments: comments,
                }
            }

            axios(comments_config)
                .then(() => {
                    console.log("comments were saved!");
                    setSavingCommentsInProgress(false); 
                })
                .catch((error) => {
                    console.log("comments failed to save!");
                });
        }
        catch (error) {
            console.log("Could not save comment")
        }  
    }, [comments, documentId])


    useEffect(() => {
        if (socket == null || quill == null) return; 
        if (socket){
            
            const interval = setInterval(() => {
                if (quill){
                    // console.log(cleared); 
                    console.log("saved");
                    socket.emit("save-document", quill.getContents()); 
                    if (!savingCommentsInProgress && comments.length > 0 && isReviewer){
                        save_comments(); 
                    }
                }
                
            }, SAVE_INTERVAL_MS)

            return () => {
                clearInterval(interval); 
            }
        }
    
    }, [socket, quill, save_comments, savingCommentsInProgress, comments, isReviewer])

    //this will check with our server if there is existing document
    //if there is update the content
    useEffect(() => {
        if (socket == null || quill == null) return; 

       
            // this will send to the server our documentID
            // if the documentId already exists it'll send the existing doc back to us
            socket.once("load-document", document => {
                
                quill.setContents(document);
                quill.enable(); //this is to enable text editor until document has loaded
                setDocumentHasLoaded(true); 
            })

            socket.emit('get-document', documentId); 
    }, [socket, quill, documentId]);


    //useEffect to connect to socket
    useEffect(() => {
        const s = io(`${process.env.REACT_APP_SERVER_URL}`)
        setSocket(s); 

        return () => {
            s.disconnect(); 
        }
    }, [])


    //use Effect for socket to receive changes
    useEffect(() => {
        if (socket === null || quill === null) return;
        const handler = (delta) => { 
            quill.updateContents(delta)
           
        };

        if (socket){
            socket.on("receive-changes",handler); 
        
            return () => {
                socket.off('receive-changes', handler); 
            }
        }
        
    }, [socket, quill])


    //useEffect for socket to emit changes once quill text-change occurs
    useEffect(() => {
        if (socket === null || quill === null) return;
        const handler = (delta, oldDelta, source) => { 
            //
            const text = quill.getText().trim();
            const words = text.split(/\s+/).filter((word) => word !== "");
            setWordCount(words.length);
            //
            if (source !== 'user') return; 
            socket.emit("send-changes", delta); 
        };

        if (quill){
            quill.on("text-change",handler); 
            quill.focus(); //mouse 
            return () => {
                quill.off('text-change', handler); 
            }
        }

    }, [socket, quill])

    const wrapperRef = useCallback((wrapper) => {
        const fetchComments = async () => {
            try {
                const configuration = {
                    method: "get",
                    url: `${process.env.REACT_APP_SERVER_URL}/comments/${documentId}`,
                };
                
                const response = await axios(configuration);
                setComments(response.data);
                console.log("Comments have been grabbed!")
            }
            catch (error) {
                console.log("Could not get comments", error);
            }
        }
        if (wrapper == null) return; 
        wrapper.innerHTML = "";
        const editor = document.createElement('div');
        wrapper.append(editor);
        const q = new Quill(editor, { 
            theme: "snow",
            placeholder: "Type your prompt + response or paste (command+v)"
        }); 
     
        q.disable();
        q.setText("Loading..."); 
        fetchComments();
 
        setQuill(q); 
        
    
    }, [documentId])



    const add_comment = () => {
        console.log(quill.getText(0,10));
        quill.focus(); 
        const selection = quill.getSelection();
        if (!quill){
            console.log("quill doesn't exist")
        }
        if (selection){
            console.log(selection)
        }else{
            console.log("dayum");
        }
        let selectedText = null;
        let overlap = false;
        if (selection){
            selectedText = quill.getText(selection.index, selection.length);

            for (let i = selection.index + selection.length -1; i >= selection.index; i--) {
                const format = quill.getFormat(i,1);
                if (format.background === '#fdb5c9'){
                    console.log("overlap detected");
                    console.log(quill.getText(i, 1));
                    overlap = true;
                }
            }
        }
        if (selectedText && !overlap){
            if (selectedText){
                quill.format('background', '#FDB5C9'); 
            }
            const selObj = window.getSelection();
            const selRange = selObj.getRangeAt(0);
    
        

            let span = null;
            if (span == null){
                if (selRange.commonAncestorContainer.parentElement.nodeName.toLowerCase() === 'span'){
                    span = selRange.commonAncestorContainer.parentElement;
                    console.log('Span Found!');
                    
                }
            }

            if (span == null){
                span = selRange.startContainer.nextSibling;
                console.log('Span Found!');
            }
            span.setAttribute("data-key", comments.length);
            let spans = document.querySelectorAll("div.ql-editor span");
            let my_index = null
            spans.forEach((myspan, index) => {
                span.style.borderBottom = '2px solid #EA1537';
                span.style.paddingTop = "3.2px";
                span.style.paddingBottom = "3.2px";
                const data_key = myspan.getAttribute("data-key")
                myspan.setAttribute("data-key", index);
                if (data_key.toString() === comments.length.toString()){
                    console.log(data_key)
                    console.log(comments.length)
                    my_index = index;
                }else{
                    var new_element = myspan.cloneNode(true);
                    myspan.parentNode.replaceChild(new_element, myspan);
                }
            })
            setComments([...comments.slice(0, my_index), `${comments.length}`, ...comments.slice(my_index)]);
            Promise.resolve().then(() => {
                spans = document.querySelectorAll("div.ql-editor span");
                spans.forEach((myspan, index) => {
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
                        console.log("CLICKED!")
                        const textarea = comment.querySelector('.mycomments')
                        if (textarea.style.display === "none"){
                            textarea.style.display ="initial"
                        }
                    
                        comment.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                        comment.style.transform = 'translateX(-15px) translateY(-8px)';
                    }
                    myspan.addEventListener('click', find_comment_ref);
                })

               

                const commentDiv = commentsRef.current.querySelector(`[data-key="${my_index}"]`);
                console.log(commentDiv);
                const textarea = commentDiv.querySelector(".mycomments");
                if (textarea){
                    textarea.focus();
                }
            });

        }else if(overlap){
            window.alert("Please don't highlight an already existing comment when trying to add comments")
        }else{
            window.alert("Please select text to comment");
        }
    }
    

    useEffect(() => {
        const boolean = isReviewer || essaysReviewed; 
        if (documentHasLoaded && userHasSubmitted && boolean){
            setTriggerLoadComments(true); 
        }
    }, [documentHasLoaded, essaysReviewed, isReviewer, userHasSubmitted])
    


    return (
        <>
        <h1 className="documentName">Untitled Document</h1>
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
                        }}onBlur ={(e) => {
                            // if (!e.currentTarget.querySelector(".select_tag").contains(e.target)){
                            //     console.log("ocurred"); 
                            //     const textarea = e.currentTarget.querySelector(".mycomments");
                            //     textarea.style.display = "none";
                            // }
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

            {!isReviewer && userHasSubmitted === false && 
            <>
            <img src={stick_figure} alt ="Cartoon of a stick figure man holding a teddy bear yawning while walking to his bed." id="mycartoon"></img>
            <img src={clouds_figure} alt="A drawing of six cartoon clouds." id="clouds"></img>
            <p id="matchingmessage">Your essay has not been matched with a reviewer yet. Click here to be matched within seconds!<span><button onClick = {() => {setTimeout(() => {
                if (!userHasSubmitted){
                    setConfirmationOpen(true);
                }
            }, 400)}}
            style = {{marginTop: "40px", marginLeft:"200px"}} className="bubbly-button">Submit Essays!</button></span></p>
            </>}

            {!isReviewer && userHasSubmitted &&
            <>
            <div style ={{marginLeft: "150px", marginTop: "150px"}}>
                <img src={congrats_on_submitting} style={{width:"350px"}} alt="matching essays"></img>
                <div>
                {/* <p style ={{width:"350px", marginLeft: "20px"}}><span ref = {el} >Congrats on submitting your essays. We are currently looking for a match!</span></p> */}
                </div>
            </div>
            </>}
            


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
                    history.push("/support")
                }}>
                    Have questions?
                    <img style={{width: "20px", marginLeft: "auto"}} src={support_icon} alt="support"></img>
                </div>
        
                {!isReviewer && <div className="editing_tool_buttons" style = {{marginTop: "40px"}} onClick={add_comment}>Add comment</div>}
                        
                {isReviewer && <div className="editing_tool_buttons" style = {{marginTop: "40px"}} onClick={save_comments}>Save comments</div>}
                <div className="editing_tool_buttons" style = {{marginTop: "40px"}} onClick={loadComments}>Load comments</div>
            </div>   
            {confirmationOpen && <Confirm closeModal={setConfirmationOpen} submitEssays={submitEssays} title="Are you sure you want to submit your essays?"/>}    
            {triggerLoadComments && <Confirm closeModal={setTriggerLoadComments} submitEssays={loadComments} title="Hey there! Click below to view your comments"/>}    
        </div>
        </>
    ); 
}   
 
export default Editingtool;