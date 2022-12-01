import styled from 'styled-components';

export const Stats = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 300px;
  height: 100px;
  background-color: #896e69;
  font-size: 12px;
  border: 2px solid #ffa577;
  border-radius: 5px;
`;

export const StatHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #ffa577;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #896e69;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  list-style: none;
  background-color: #f9f9ff;
  border: 1px solid #ffa577;
  border-radius: 2px;
`;
