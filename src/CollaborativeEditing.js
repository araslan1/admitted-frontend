// useCollaborativeEditing.js

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Quill from 'quill';

const SAVE_INTERVAL_MS = 2000;

const useCollaborativeEditing = (documentId, quill) => {
  const [socket, setSocket] = useState(null);
  const [cleared, setCleared] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (cleared) return;
    if (!socket || quill == null) return;
    
    const interval = setInterval(() => {
      if (quill) {
        console.log(cleared);
        console.log('saved');
        socket.emit('save-document', quill.getContents());
      }
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill, cleared]);

  useEffect(() => {
    if (!socket || quill == null) return;

    socket.once('load-document', (document) => {
      quill.setContents(document);
      quill.enable();
      loadComments();
    });

    socket.emit('get-document', documentId);
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (cleared) {
      console.log("didn't connect to socket");
      setSocket(null);
      return;
    }

    const s = io('http://localhost:7470');
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [cleared]);

  useEffect(() => {
    if (!socket || quill === null) return;
    const handler = (delta) => {
      quill.updateContents(delta);
    };

    socket.on('receive-changes', handler);

    return () => {
      socket.off('receive-changes', handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (!socket || quill === null) return;
    const handler = (delta, oldDelta, source) => {
      const text = quill.getText().trim();
      const words = text.split(/\s+/).filter((word) => word !== '');
      setWordCount(words.length);

      if (source !== 'user') return;
      socket.emit('send-changes', delta);
    };

    quill.on('text-change', handler);
    quill.focus();

    return () => {
      quill.off('text-change', handler);
    };
  }, [socket, quill]);

  return { quill, wordCount, cleared };
};

export default useCollaborativeEditing;
