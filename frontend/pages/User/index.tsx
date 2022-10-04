import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';

import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';

interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

const User: FC = () => {
  const [chat, setChat] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([]);

  const handleSubmit = () => {
    if (!chat) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setChat('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{chat}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <ChatList />
      <ChatBox submitting={submitting} setChat={setChat} handleSubmit={handleSubmit} chat={chat} />
    </>
  );
};

export default User;
