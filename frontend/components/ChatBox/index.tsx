import React, { ChangeEvent, FC } from 'react';
import { Button, Comment, Form, Input, Mentions } from 'antd';
import type { OptionProps } from 'antd/es/mentions';
import { useParams } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';

const { TextArea } = Input;
const { Option, getMentions } = Mentions;

interface EditorProps {
  setChat: (text: string) => void;
  onSubmit: () => void;
  submitting: boolean;
  chat: string;
}

const Editor: FC<EditorProps> = ({ setChat, onSubmit, submitting, chat }) => {
  return (
    <>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Mentions
          style={{ width: '120%' }}
          rows={6}
          onChange={(data) => {
            setChat(data);
          }}
        >
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

interface Props {
  submitting: boolean;
  setChat: (text: string) => void;
  handleSubmit: () => void;
  chat: string;
}

const ChatBox: FC<Props> = ({ submitting, setChat, handleSubmit, chat }) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Comment
      avatar={<img src={gravatarUrl(id, { size: 30, default: 'retro' })} alt={id} />}
      content={<Editor setChat={setChat} onSubmit={handleSubmit} submitting={submitting} chat={chat} />}
    />
  );
};

export default ChatBox;
