import { useSelector } from "react-redux";

export const GetOrdersList = () => {
  const orderList = useSelector((state) => state.orders);
  const pagination = useSelector((state) => state.pagination);
  const start = (pagination.currentPage - 1) * pagination.itemsCountPerPage;
  const end = pagination.itemsCountPerPage * pagination.currentPage - 1;

  const result = orderList.filter(
    (order) =>
      orderList.indexOf(order) >= start && orderList.indexOf(order) <= end
  );
  return result;
};
