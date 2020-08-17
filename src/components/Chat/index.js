import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

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

const Input = styled.input`
  flex-grow: 1;
  min-height: 50px;
  border: solid 1px ${props => props.theme.primary};
  background-color: transparent;
  padding-left: 15px;
  margin-right: 5px;
  border-radius: 15px;
  :focus {
    outline: none;
    border-width: 2px;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.primary};
  font-weight: 700;
  width: 50px;
  background-color: transparent;
  border: solid 1px ${props => props.theme.primary};
  border-radius: 50%;
  cursor: pointer;
  box-shadow: inset 0px 0px 8px;
  :hover, :focus {
    outline: none;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
    box-shadow: 3px 3px 8px ${props => props.theme.primary};
  }
`;

const MessagesContainer = styled(Container)`
  flex: 1 0 0;
  align-items: flex-start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    display: ${props => props.scroll ? "null" : "none"};
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px ${props => props.theme.primary};
  }
  @media screen and (max-width: 580px) {
    flex: 1 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 5px;
`;

const Message = styled.p`
  background-color: transparent;
  border: solid 1.5px ${props => props.theme.primary};
  border-radius: 15px;
  margin: 2px 10px;
  padding: 5px 15px;
  color: ${props => props.theme.primary};
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
    [scroll, setScroll] = useState(false),
    [scrollTop, setScrollTop] = useState(false),
    messagesDiv = useRef();

  useEffect(() => {
    fetch("https://desolate-river-35422.herokuapp.com/allMessages?page=1&limit=2&name=12")
      .then(response => response.json())
      .then(data => {
        setAllMessages(data.rooms[0].messages.map(item => item.text));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const start = allMessages.length - messages.length - 20 > 0 ? allMessages.length - messages.length - 20 : 0;
    const end = allMessages.length - messages.length;
    setMessages(state => [...allMessages.slice(start, end), ...state]);
    setScrollTop(false);
  }, [allMessages])

  useEffect(() => {
    if (messagesDiv.current.scrollHeight > messagesDiv.current.clientHeight) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
    if (scrollTop) {
      messagesDiv.current.scrollTop = 0;
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

  const get10Messages = () => {
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
        scroll={scroll}
        ref={messagesDiv}
        onScroll={e => {
          if (e.currentTarget.scrollTop === 0) {
            get10Messages();
          }
        }}
      >
        {messages.map((item, index) => <Message key={index} k={index} text={item} />)}
      </MessagesContainer>
      <InputContainer>
        <Input
          value={message}
          placeholder="Type a message..."
          onKeyPress={e => { if (e.key === 'Enter') send() }}
          onChange={e => setMessage(e.currentTarget.value)}
        />
        <Button onClick={send}>send</Button>
      </InputContainer>
    </Container>
  );
}