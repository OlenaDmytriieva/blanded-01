// const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';
import { formattingData } from '../../helpers/formattingDate';
export const CryptoHistory = ({ cryptoHistory }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {cryptoHistory.map((transaction, index) => {
          return (
            <tr key={transaction.id} className={style.tr}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{transaction.price}</td>
              <td className={style.td}>{transaction.amount}</td>
              <td className={style.td}>{formattingData(transaction.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
