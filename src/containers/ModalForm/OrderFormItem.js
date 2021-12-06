import modalForm from "./style/ModalForm.module.css";
import { formatSum } from "../../utils/FormatFunctions";

export const OrderFormItem = ({ article, orderName, price }) => {
  return (
    <li className={modalForm.ListItemRow}>
      <div className={modalForm.ListItem}>{article}</div>
      <div className={modalForm.ListItem}>{orderName}</div>
      <div className={modalForm.ListItem}>{formatSum(price)}</div>
    </li>
  );
};

