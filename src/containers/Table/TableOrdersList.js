import { OrderRow } from "./OrderRow";

export const TableOrdersList = ({
  className,
  listClass,
  orders,
  onClick,
  onChange,
}) => {
  const blockClass = className ? className : "table__body"
  const listMainClass = listClass ? listClass : "table__body-list"
  const ordersRender = orders.map((order) => {
    return (
      <OrderRow
        {...order}
        key={order.id}
        onClick={onClick}
        onChange={onChange}
      />
    );
  });

  return (
    <div className={blockClass}>
      <div className={listMainClass} >
        {ordersRender}
      </div>
    </div>
  );
};
