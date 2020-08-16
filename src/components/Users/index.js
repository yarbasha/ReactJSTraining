import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  background-color: #36c997;
  border-radius: 15px;
  padding: 15px 15px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

const UsersContainer = styled.div`
  flex: 1 0 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    display: ${props => props.scroll ? "null" : "none"};
    }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #fff; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 10px #fff;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  background-color: #fff;
  color: #36c997;
  border-radius: 10px;
  margin: 8px 5px;
  font-size: large;
  overflow: hidden;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  
`;

const User = ({ user }) => {

  return (
    <UserContainer>
      <Image src={user.image} />
      <label>{user.name}</label>
    </UserContainer>
  );
}

export default function Users() {
  const [users, setUsers] = useState([
    { name: "brad", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "gibson", image: "https://randomuser.me/api/portraits/men/77.jpg" },
    { name: "noah", image: "https://randomuser.me/api/portraits/men/17.jpg" }
  ]),
    [scroll, setScroll] = useState(false),
    usersContainer = useRef();

  useEffect(() => {
    if (usersContainer.current.scrollHeight > usersContainer.current.clientHeight) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  }, [users]);


  return (
    <Container>
      <UsersContainer scroll={scroll} ref={usersContainer}>
        {users.map((item, index) => <User key={index} user={item} />)}
      </UsersContainer>
    </Container>
  );
}