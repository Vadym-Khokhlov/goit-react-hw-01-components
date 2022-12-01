import styled from 'styled-components';

export const ProfileWrap = styled.section`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  width: auto;
  height: auto;
  background-color: #e6e6ec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: auto;
  border-radius: 5px;
  border: 2px solid #ffa577;
  color: #ffa577;
  font-size: 12px;
`;

export const ProfileImage = styled.img`
  background-color: #f9f9ff;
  border-radius: 50%;
  border: 2px solid #f9f9ff;
  height: 100px;
  width: 100px;
  margin-top: 5px;
`;

export const ProfileName = styled.h2`
  font-size: 16px;
  padding: 0;
  margin: 0;
`;

export const ProfileInfo = styled.p`
  display: flex;
  padding: 0;
  margin: 0;
  color: silver;
`;

export const StatsCard = styled.ul`
  display: flex;
  justify-content: space-around;
  align-content: center;
  gap: 5px;
  padding: 0;
  margin: 0;
  color: #ffa577;
`;

export const StatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: #ffa577;
`;
