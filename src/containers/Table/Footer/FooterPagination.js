import Button from "../../../components/Button";
import { PageDropdown } from "./PageDropdown/PageDropdown";

const primaryClass = "table__footer-button table__footer-button_small";
const secondaryClass =
    "table__footer-button table__footer-button_small table__footer-button_transparent";

export const FooterPagination = ({
                                     onClick,
                                     page,
                                     maxPage,
                                     onClickLast,
                                     onSubmit,
                                     isVisible,
                                 }) => {
    let currentPage = Number(page);
    const firstButtonValue = (maxPage <= 3) ? 1 :
        ((currentPage === maxPage) && (currentPage !== 1))
            ? currentPage - 1
            : currentPage;
    const secondButtonValue = (maxPage <= 3) ? 2 :
        currentPage + 1 <= maxPage ? currentPage + 1 : currentPage;
    const thirdButtonValue = (maxPage <= 3) ? 3 : currentPage + 2;

    const firstButtonClass =
        firstButtonValue === currentPage ? primaryClass : secondaryClass;
    const secondButtonClass = secondButtonValue === currentPage ? primaryClass : secondaryClass;
    const thirdButtonClass = thirdButtonValue === currentPage ? primaryClass : secondaryClass;

    const lastPageButton = !(currentPage >= (maxPage - 2)) && (
        <>
            <span className="table__pagination-continue">…</span>
            <Button className={secondaryClass} onClick={onClick}>
                {maxPage}
            </Button>
        </>
    );

    return (
        <div className="table__footer-pagination">
            <Button className={firstButtonClass} onClick={(firstButtonValue !== currentPage) && onClick}>
                {firstButtonValue}
            </Button>

            {maxPage !== 1 && (
                <Button className={secondButtonClass} onClick={(secondButtonValue !== currentPage) && onClick}>
                    {secondButtonValue}
                </Button>
            )}

            {thirdButtonValue <= maxPage && (
                <Button className={thirdButtonClass} onClick={(thirdButtonValue !== currentPage) && onClick}>
                    {thirdButtonValue}
                </Button>
            )}
            {maxPage > 3 && page <= maxPage && lastPageButton}

            <Button className={secondaryClass} onClick={onClickLast}>
                #
            </Button>
            <PageDropdown isVisible={isVisible} onSubmit={onSubmit} />
        </div>
    );
};
