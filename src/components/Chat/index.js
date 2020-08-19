import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../elements';

const Container = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  padding-top: 5px;
  padding-right: 5px;
  @media screen and (max-width: 580px) {
    flex: 1;
  }
`;

const ChatInput = styled(Input)`
  flex-grow: 1;
  min-height: 50px;
  margin: 0px 5px 0px;
`;

const SendButton = styled(Button)`
  border-width: 1px;
  font-weight: 700;
  width: 50px;
  height: 50px;
  margin: 0px;
`;

const MessagesContainer = styled(Container)`
  flex: 1 0 0;
  align-items: flex-start;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 580px) {
    flex: 1 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;

`;

const Message = styled.p`
  background-color: transparent;
  border: solid 1.5px ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 2px 10px;
  padding: 5px 15px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: large;
  &::after {
    content:  "${props => props.text}";
  }
`;


export default function Chat() {

  const [message, setMessage] = useState(""),
    [messages, setMessages] = useState([]),
    [allMessages, setAllMessages] = useState([]),
    [scrollTop, setScrollTop] = useState(false),
    messagesDiv = useRef();

  useEffect(() => {
    fetch("https://desolate-river-35422.herokuapp.com/allMessages?page=1&limit=2&name=12")
      .then(response => response.json())
      .then(data => {
        const textMessages = data.rooms[0].messages.map(item => item.text);
        setAllMessages(textMessages);
        setMessages(state => [...textMessages.slice(textMessages.length - 20, textMessages.length), ...state]);
        setScrollTop(false);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (scrollTop) {
      messagesDiv.current.scrollTop = 5;
    } else {
      messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
    }
  }, [messages, scrollTop]);

  const send = () => {
    if (message !== "") {
      setMessages(state => [...state, message]);
      setScrollTop(false);
      setMessage("");
    }
  };

  const getTenMessages = () => {
    const start = allMessages.length - messages.length - 10 > 0 ? allMessages.length - messages.length - 10 : 0;
    const end = allMessages.length - messages.length;
    if (end > 0) {
      setMessages(state => [...allMessages.slice(start, end), ...state]);
      setScrollTop(true);
    } else {
      return;
    }
  };

  return (
    <Container>
      <MessagesContainer
        ref={messagesDiv}
        onScroll={({ currentTarget }) => currentTarget.scrollTop === 0 && getTenMessages()}
      >
        {messages.map((item, index) => <Message key={index} k={index} text={item} />)}
      </MessagesContainer>
      <InputContainer>
        <ChatInput
          value={message}
          placeholder="Type a message..."
          onKeyPress={e => { if (e.key === 'Enter') send() }}
          onChange={e => setMessage(e.currentTarget.value)}
        />
        <SendButton onClick={send}>send</SendButton>
      </InputContainer>
    </Container>
  );
}