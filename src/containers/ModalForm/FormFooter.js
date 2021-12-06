import modalForm from "./style/ModalForm.module.css";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useState } from "react";

const FormFooter = ({ buttonHandler }) => {
  const [isLoaderShow, setIsloaderShow] = useState(true);

  setTimeout(() => {
    setIsloaderShow(false);
  }, 3000);

  const footerContent = isLoaderShow ? (
    <Loader isLoading />
  ) : (
    "Ошибка или индикатор загрузки"
  );
  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>{footerContent}</div>

      <Button
        className={modalForm.footer__button}
        svgName="checkmark"
        iconClassName={modalForm.footer__icon}
        onClick={buttonHandler}
      >
        Сохранить
      </Button>
    </footer>
  );
};

export default FormFooter;
