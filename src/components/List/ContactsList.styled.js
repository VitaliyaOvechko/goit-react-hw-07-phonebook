import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 100px 10px 5px;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const DeleteBtn = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  background-color: solid;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #517551;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #dbe4ee;
  }
`;
