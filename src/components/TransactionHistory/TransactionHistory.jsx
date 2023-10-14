import PropTypes from "prop-types";
import css from 'components/TransactionHistory/Transaction.module.css'


const TransactionHistory = ({ items } ) => {


  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody >
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    );
};

export default TransactionHistory;



TransactionHistory.propTypes  = {
  // Массив объектов 
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,

    })
  ).isRequired,
};