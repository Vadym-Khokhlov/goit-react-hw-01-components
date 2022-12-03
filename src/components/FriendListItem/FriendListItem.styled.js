import styled from 'styled-components';

export const FriendCard = styled.li`
  width: 300px;
  height: 120px;
  background-color: #e6e6ec;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  border: 2px solid #ffa577;
  color: #ffa577;
  font-size: 12px;
`;

export const FriendImage = styled.img`
  background-color: #f9f9ff;
  border-radius: 50%;
  border: 2px solid #f9f9ff;
  height: 70px;
  width: 70px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

export const IsOnline = styled.span`
  color: greenyellow;
  font-size: 12px;
`;
