import SvgElement from "./Icons/SvgElement";
import { useState } from "react";

const loaderMainClass = "filter__loader";
const loaderTextClass = "filter__loader-text";

const Loader = ({ loaderIcon = "refresh", isLoading }) => {
  const [isLoad, setIsload] = useState(isLoading);

  setTimeout(() => setIsload(false), 3000);
  const loader = () => {
    return (
      <div className={loaderMainClass}>
        <SvgElement svgName={loaderIcon} />
        <span className={loaderTextClass}>Загрузка</span>
      </div>
    );
  };

  const showLoader = (isLoad) => {
    return isLoad ? loader() : null;
  };

  return showLoader(isLoad);
};

export  default Loader;