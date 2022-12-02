import styled from 'styled-components';

export const TransSection = styled.section`
  margin-top: 50px;
`;

export const TransTable = styled.table`
  border: 2px solid #ffa577;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #896e69;
  color: #f9f9ff;
  tr:nth-child(2n + 1) {
    background-color: #f9f9ff;
    color: #896e69;
  }
`;

export const TableHeading = styled.th`
  font-size: 20px;
  border: 2px solid #ffa577;
  color: #ffa577;
  background-color: #e6e6ec;
`;
