import {
  TableHeading,
  TransSection,
  TransTable,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <TransSection>
      <TransTable>
        <thead>
          <tr>
            <TableHeading>Type</TableHeading>
            <TableHeading>Amount</TableHeading>
            <TableHeading>Currency</TableHeading>
          </tr>
        </thead>
        <tbody>
          {items.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </TransTable>
    </TransSection>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
