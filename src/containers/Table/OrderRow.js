import Checkbox from "../../components/Checkbox";
import SvgElement from "../../components/Icons/SvgElement";
import {
  formatDate,
  formatSum,
  formatCount,
} from "../../utils/FormatFunctions";

const orderLabelClass = "table__checkbox-control";
const orderRowClass = "table__body-item-row";
const itemClass = "table__header-item";
const itemTextClass = "table__header-item-text";

const STATUS_ICON_MAP = {
  Новый: "dot",
  Расчет: "dot",
  Выполнен: "checkmark",
  Отменен: "abort",
  Отложен: "dot",
};

const STATUS_CLASS_MAP = {
  Новый: "table__header-item",
  Расчет: "table__header-item table__header-item_blue",
  Выполнен: "table__header-item table__header-item_green",
  Отменен: "table__header-item table__header-item_half-transparent",
  Отложен: "table__header-item",
};

export const OrderRow = ({
  id,
  creationDate,
  status,
  positionsCount,
  sum,
  name,
  onClick,
  onChange,
  isChecked,
}) => {
  const blockClass = isChecked
    ? "table__body-item table__body-item_checked"
    : "table__body-item";
  return (
    <div className={blockClass} onClick={onClick} name={id}>
      <div className={orderRowClass} name={id}>
        <div className={itemClass}>
          <label className={orderLabelClass}>
            <Checkbox onChange={onChange} name={id} />
          </label>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{id}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatDate(creationDate)}</span>
        </div>
        <div className={STATUS_CLASS_MAP[status]}>
          <SvgElement svgName={STATUS_ICON_MAP[status]} />
          <span className={itemTextClass}>{status}</span>
        </div>
        <li className={itemClass}>
          <span className={itemTextClass}>{formatCount(positionsCount)}</span>
        </li>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatSum(sum)}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{name}</span>
        </div>
      </div>
    </div>
  );
};
