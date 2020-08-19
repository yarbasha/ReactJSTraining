import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 15px;
  box-shadow: 3px 0 8px 0px ${({ theme }) => theme.primary};
  padding: 15px 15px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

const UsersContainer = styled.div`
  flex: 1 0 0;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
    }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.secondary}; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px ${({ theme }) => theme.secondary};
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  margin: 8px 5px;
  font-size: large;
  box-shadow: inset 0px 0px 8px;
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
  const [users, setUsers] = useState([]),
    usersContainer = useRef();

  useEffect(() => {
    setUsers([
      { name: "brad", image: "https://randomuser.me/api/portraits/men/75.jpg" },
      { name: "gibson", image: "https://randomuser.me/api/portraits/men/77.jpg" },
      { name: "noah", image: "https://randomuser.me/api/portraits/men/17.jpg" }
    ])
  }, []);

  return (
    <Container>
      <UsersContainer ref={usersContainer}>
        {users.map((item, index) => <User key={index} user={item} />)}
      </UsersContainer>
    </Container>
  );
}