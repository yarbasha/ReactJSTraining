import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ secondary, theme }) => secondary ? css`
      color: ${theme.secondary};
      border: solid 2px ${theme.secondary};
      :hover, :focus {
        color: ${theme.primary};
        background-color: ${theme.secondary};
        box-shadow: 3px 3px 8px ${theme.secondary};
      }
      ` : css`
      color: ${theme.primary};
      border: solid 2px ${theme.primary};
      :hover, :focus {
        color: ${theme.secondary};
        background-color: ${theme.primary};
        box-shadow: 3px 3px 8px ${theme.primary};
      }
      `}
  background-color: transparent;
  border-radius: 25px;
  box-shadow: inset 0px 0px 5px;
  font-size: 15px;
  margin: 10px;
  height: 35px;
  width: 216px;
  :hover, :focus {
    cursor: pointer;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 35px;
  margin: 10px 0px;
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.primary};
  border-radius: 15px;
  padding-left: 10px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  :focus {
    outline: none;
    border-width: 2px;
  }
  ::placeholder {
    color: ${({ theme }) => theme.primary};
    font-weight: 200;
  }
`;

export const Link = styled(RouterLink)`
  color: ${props => props.theme.secondary};
  margin: 0 10px;
  text-decoration: none;
  font-size: large;
  :hover {
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 0.95;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px ${props => props.theme.primary};
  border-radius: 15px;
  box-shadow: 0px 0px 20px 5px ${props => props.theme.primary};
`;