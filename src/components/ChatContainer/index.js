import React from 'react';
import styled from 'styled-components';
import Chat from '../Chat';
import Users from '../Users';

const ChatContianer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  border: solid 1px #36c997;
  border-radius: 15px;
  box-shadow: 10px 5px 10px 0px #a8fce0;
`;

export default function ChatContainer() {
  return (
    <ChatContianer>
      <Users />
      <Chat />
    </ChatContianer>
  );
}