import styled from 'styled-components';

export const Stats = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 500px;
  height: 200px;
  background-color: #896e69;
  font-size: 20px;
  border: 2px solid #ffa577;
  border-radius: 5px;
`;

export const StatHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #ffa577;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #f9f9ff;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  list-style: none;
  border: 1px solid #ffa577;
  border-radius: 5px;
  width: auto;
  height: 30px;
  text-align: center;
  padding: 4px;
  span:not(:last-child) {
    margin-right: 5px;
  }
`;
