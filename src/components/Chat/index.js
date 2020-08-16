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
  width: 90%;
  min-height: 50px;
  border: solid 1px #36c997 ;
  background-color: transparent;
  padding-left: 15px;
  border-radius: 15px;
  :focus {
    outline: none;
    border-width: 2px;
  }
`;

const Button = styled.button`
  color: #36c997;
  font-weight: 700;
  width: 50px;
  background-color: transparent;
  border: solid 1px #36c997;
  border-radius: 50%;
  cursor: pointer;
  :hover, :focus {
    outline: none;
    color: #fff;
    background-color: #36c997;
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
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 10px #36c997; 
  }
  @media screen and (max-width: 580px) {
    flex: 1 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-around;
`;

const Message = styled.p`
  background-color: transparent;
  border: solid 1.5px #36c997;
  border-radius: 15px;
  margin: 2px 10px;
  padding: 5px 15px;
  color: #36c997;
  font-weight: 500;
  font-size: large;
  &::after {
    content:  "${props => props.text}";
  }
`;


export default function Chat() {
  const [message, setMessage] = useState(""),
    [messages, setMessages] = useState(["Hi", "how r u?", "Hello"]),
    [divHeight, setDivHeight] = useState(0),
    [scroll, setScroll] = useState(false),
    chatMessages = useRef();

  useEffect(() => {
    if (chatMessages.current.scrollHeight > chatMessages.current.clientHeight) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
    if (divHeight === 0) {
      setDivHeight(chatMessages.current.scrollHeight);
    }
    chatMessages.current.scrollTop = divHeight;
  }, [divHeight, messages]);

  const send = () => {
    if (message !== "") {
      setMessages(state => [...state, message]);
      setMessage("");
      setDivHeight(chatMessages.current.scrollHeight);
    }
  };



  return (
    <Container>
      <MessagesContainer scroll={scroll} ref={chatMessages}>
        {messages.map((item, index) => <Message key={index} text={item} />)}
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