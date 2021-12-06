import Button from "../../components/Button";

const wrapperClass = "page-header";
const headerClass = "page-header__text";
const buttonClass = "page-header__button page-header__button_transparent";

const Header = () => {
  return (
    <div className={wrapperClass}>
      <h1 className={headerClass}>Список заказов</h1>
      <Button className={buttonClass} svgName="sun" >Cветлая тема</Button>
    </div>
  );
};

export  default Header