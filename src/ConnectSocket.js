import { useEffect } from "react";

const SAVE_INTERVAL_MS = 1000; 

const ConnectSocket = (socket, quill, documentId, setSocket, setWordCount, io) => {
    useEffect(() => {
        if (socket == null || quill == null) return; 
        if (socket){
            
            const interval = setInterval(() => {
                if (quill){
                    socket.emit("save-document", quill.getContents()); 
                }
                
            }, SAVE_INTERVAL_MS)

            return () => {
                clearInterval(interval); 
            }
        }
    
    }, [socket, quill])

    //this will check with our server if there is existing document
    //if there is update the content
    useEffect(() => {
        if (socket == null || quill == null) return; 

       
            // this will send to the server our documentID
            // if the documentId already exists it'll send the existing doc back to us
            socket.once("load-document", document => {
                
                quill.setContents(document);
                quill.enable(); //this is to enable text editor until document has loaded
            })

            socket.emit('get-document', documentId); 

        

    }, [socket, quill, documentId]);


    //useEffect to connect to socket
    useEffect(() => {
    const s = io("http://localhost:7459")
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
    
}
 
export default ConnectSocket;