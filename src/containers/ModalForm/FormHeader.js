import modalForm from "./style/ModalForm.module.css";
import Button from "../../components/Button";
const headerIconName = "incorrect";

const FormHeader = ({ buttonHandler, orderNumber = "" }) => {
  return (
    <header className={modalForm.header}>
      <div className={modalForm.header__title}>{`Заявка #${orderNumber}`}</div>
      <Button
        className={modalForm.button}
        svgName={headerIconName}
        iconClassName={modalForm.header__icon}
        onClick={buttonHandler}
      />
    </header>
  );
};

export default FormHeader;
