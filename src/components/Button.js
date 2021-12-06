import SvgElement from "./Icons/SvgElement";

const Button = ({
  className,
  svgName,
  textClassName = "button__text",
  onClick,
  iconClassName,
  children
}) => (
    <button className={className} onClick={onClick}>
      <SvgElement svgName={svgName} className={iconClassName} />
      <span className={textClassName}>
        {children}
      </span>
    </button>
  );

export default Button;
