import styled from 'styled-components';

export const ProfileWrap = styled.section`
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  width: 300px;
  height: auto;
  background-color: #e6e6ec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  border: 2px solid #ffa577;
  color: #ffa577;
  font-size: 20px;
`;

export const ProfileImage = styled.img`
  background-color: #f9f9ff;
  border-radius: 50%;
  border: 2px solid #f9f9ff;
  height: 150px;
  width: 150px;
  margin-top: 5px;
`;

export const ProfileName = styled.h2`
  font-size: 26px;
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
  align-items: center;
  justify-content: center;
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
  margin-bottom: 10px;
  border: 1px solid #ffa577;
  border-radius: 2px;
  padding-right: 15px;
  padding-left: 15px;
`;
