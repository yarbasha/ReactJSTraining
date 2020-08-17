import React from 'react';
import styled from 'styled-components';
import Chat from '../Chat';
import Users from '../Users';

const ChatContianer = styled.div`
  display: flex;
  flex: 0.95;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px ${props => props.theme.primary};
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px ${props => props.theme.primary};
`;

export default function ChatContainer() {
  return (
    <ChatContianer>
      <Users />
      <Chat />
    </ChatContianer>
  );
}