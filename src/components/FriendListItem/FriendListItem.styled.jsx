import styled from 'styled-components';

export const FriendCard = styled.div`
  width: auto;
  height: auto;
  background-color: #e6e6ec;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 5px;
`;

export const FriendName = styled.h2`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;
