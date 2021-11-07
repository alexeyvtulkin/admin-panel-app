import '../src/css/reset.css';
import '../src/css/style.css';

function App() {
  return (
    <body>
    <div className="main-wrapper">
        <div className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <button className="page-header__button page-header__button_transparent">
                <svg className="page-header__icon">
                    <use xlinkHref="#sun"></use>
                </svg>
                <span className="page-header__button__text">Cветлая тема</span>
            </button>
        </div>
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__group">
                    <form className="filter__form">
                        <label className="filter__searchbar-group">
                            <div className="filter__searchbar-field filter__searchbar-field_empty">
                                <div className="filter__searchbar-search-area">
                                    <svg className="filter__searchbar-icon filter__searchbar-icon_active">
                                        <use xlinkHref="#search"></use>
                                    </svg>
                                    <input className="filter__searchbar-area" placeholder="Номер заказа или ФИО" />  
                                </div>
                                <button className="filter__searchbar-button">
                                    <svg className="filter__searchbar-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>

                        <button className="filter-button">
                            <svg className="filter-button__icon">
                                <use xlinkHref="#filter"></use>
                            </svg>
                            <span className="filter-button__text">Фильтры</span>
                        </button>

                        <button className="filter-button filter-button_no-icon">
                            <span className="filter-button__text">Сбросить фильтры</span>
                        </button>
                    </form>

                    <div className="filter__loader">
                        <svg className="filter__loader-icon">
                            <use xlinkHref="#refresh"></use>
                        </svg>
                        <span className="filter__loader-text">Загрузка</span>
                    </div>
                </div>
            </div>
            <div className="filter__wrapper">
                <form className="filter__form">
                    <div className="filter__input">
                        <label className="filter__input-control">
                            <span className="filter__input-title">Дата оформления</span>
                            <div className="filter__input-field filter__input-field_empty">
                                <input className="filter__input-area" placeholder="dd.mm.dddd" value="20.01.2021" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_incorrect">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>  

                        <label className="filter__input-control">
                            <div className="filter__input-field filter__input-field_empty">
                                <input className="filter__input-area" placeholder="dd.mm.dddd" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <div className="filter__input">
                        <ul className="filter__dropdown-list">
    
                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Новый</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Расчет</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Подтвержден</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Отложен</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Выполнен</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Отменен</span>      
                                </label>
                            </li>                             
                        </ul>
                        <label className="filter__input-control">
                            <span className="filter__input-title">Статус заказа</span>
                            <div className="filter__input-field filter__input-field_empty filter__input-field_long">
                                <input className="filter__input-area" placeholder="Выберите статус заказа" value="Любой" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_drop">
                                        <use xlinkHref="#v_arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <div className="filter__input">
                        <label className="filter__input-control">
                            <span className="filter__input-title">Сумма заказа</span>
                            <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                                <input className="filter__input-area" placeholder="" value="5000" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_incorrect">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>  

                        <label className="filter__input-control">
                            <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                                <input className="filter__input-area" placeholder="₽" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <button className="filter-button filter-button_no-icon filter-button_short">
                        <span className="filter-button__text">Применить</span>
                    </button>

                </form>
            </div>
        </div>
        <div className="table">
            <div className="table__header">
                <ul className="table__header-list">
                    <li className="table__header-item">
                        <label className="table__checkbox-control">
                            <div className="table__checkbox-group">
                                <input type="checkbox" className="table__checkbox" />
                                <svg className="table__header-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>   
                        </label>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">#</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Дата</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Статус</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Позиций</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Сумма</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">ФИО покупателя</span>
                    </li>
                </ul>
            </div>
            <div className="table__body">
                <ul className="table__body-list">
                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                        <ul className="table__body-item-row">
                            <li className="table__header-item">
                                <div className="table__checkbox-group">
                                    <input type="checkbox" className="table__checkbox" />
                                    <svg className="table__header-icon">
                                        <use xlinkHref="#checkmark"></use>
                                    </svg>
                                </div>
                            </li>
                            <li className="table__header-item">
                                <span className="table__header-item-text">1270989</span>
                            </li>
                            <li className="table__header-item">
                                <span className="table__header-item-text">15.02.2021, 18:00</span>
                            </li>
                            <li className="table__header-item">
                                <svg className="table__header-icon table__header-icon_orange">
                                    <use xlinkHref="#dot"></use>
                                </svg>
                                <span className="table__header-item-text">Новый</span>
                            </li>
                            <li className="table__header-item">
                                <span className="table__header-item-text">6</span>
                            </li>
                            <li className="table__header-item">
                                <span className="table__header-item-text">101 907 ₽</span>
                            </li>
                            <li className="table__header-item">
                                <span className="table__header-item-text">Чернышев Филипп Семёнович</span>
                            </li>
                        </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">2353474</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">12.03.2021, 05:15</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_orange">
                                        <use xlinkHref="#dot"></use>
                                    </svg>
                                    <span className="table__header-item-text">Новый</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">2</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">98 003 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Филиппов Степан Васильевич</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1103397</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">03.02.2021, 08:04</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_blue">
                                        <use xlinkHref="#dot"></use>
                                    </svg>
                                    <span className="table__header-item-text">Расчет</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">5</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">3 800 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Тихонова Алина Давидовна</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">6924662</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">21.01.2021, 13:32</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_green">
                                        <use xlinkHref="#checkmark"></use>
                                    </svg>
                                    <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">5 700 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Александрова Юлия Никитична</span>
                                </li>
                            </ul>
                    </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">2200086</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">19.01.2021, 10:28</span>
                                </li>
                                <li className="table__header-item table__header-item_half-transparent">
                                    <svg className="table__header-icon table__header-icon_black ">
                                        <use xlinkHref="#abort"></use>
                                    </svg>
                                    <span className="table__header-item-text">Отменен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">–</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">–</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Андрей</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">2842064</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">04.01.2021, 12:12</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_orange">
                                        <use xlinkHref="#dot"></use>
                                    </svg>
                                    <span className="table__header-item-text">Отложен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">20 500 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Судакова Анастасия Ильинична</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1730071</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">17.12.2020, 22:45</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_green">
                                        <use xlinkHref="#checkmark"></use>
                                    </svg>
                                    <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1 399 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Зверева Арина Николаевна</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">7987376</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">07.12.2020, 08:57</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_green">
                                        <use xlinkHref="#checkmark"></use>
                                    </svg>
                                    <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">3</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">117 810 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Карташов Максим Кириллович</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1373265</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">15.11.2020, 14:26</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_green">
                                        <use xlinkHref="#checkmark"></use>
                                    </svg>
                                    <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">17 008 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Васильев Вадим Даниилович</span>
                                </li>
                            </ul>
                        </label>
                    </li>

                    <li className="table__body-item">
                        <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <label className="table__checkbox-control">
                                        <div className="table__checkbox-group">
                                            <input type="checkbox" className="table__checkbox" />
                                            <svg className="table__header-icon">
                                                <use xlinkHref="#checkmark"></use>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1311100</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">07.11.2020, 18:52</span>
                                </li>
                                <li className="table__header-item table__header-item_half-transparent">
                                    <svg className="table__header-icon table__header-icon_black ">
                                        <use xlinkHref="#abort"></use>
                                    </svg>
                                    <span className="table__header-item-text">Отменен</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">–</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">–</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">София</span>
                                </li>
                            </ul>
                        </label>
                    </li>
        
                </ul>
            </div>
            <div className="table__footer">
                <form className="table__footer-action">
                    <span className="table__footer-text">Выбрано записей: 5</span>
                    <button className="table__footer-button">
                        <svg className="table__footer-icon">
                            <use xlinkHref="#pencil"></use>
                        </svg>
                        <span className="table__footer-button-text">Изменить статус</span>
                    </button>
                    <button className="table__footer-button table__footer-button_red">
                        <svg className="table__footer-icon">
                            <use xlinkHref="#bin"></use>
                        </svg>
                        <span className="table__footer-button-text">Удалить</span>
                    </button>
                </form>
                <form className="table__footer-dropdown">
                    <span className="table__dropdown-title">Удалить n записей?</span>
                    <button className="table__dropdown-button table__dropdown-button_transparent">
                        <span className="table__dropdown-button-text">Удалить</span>
                    </button>
                    <button className="table__dropdown-button">
                        <span className="table__dropdown-button-text">Отмена</span>
                    </button>
                </form>

                <div className="table__footer-pagination">
                    <form className="table__footer-pagination-form">
                        <button className="table__footer-button table__footer-button_small">
                            <span className="table__footer-button-text">1</span>
                        </button>
                        <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                            <span className="table__footer-button-text">2</span>
                        </button>
                        <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                            <span className="table__footer-button-text">3</span>
                        </button>
                        <span className="table__pagination-continue">…</span>
                        <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                            <span className="table__footer-button-text">18</span>
                        </button>
                    </form>
                        <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                            <span className="table__footer-button-text">#</span>
                        </button>
                </div>
            </div>
        </div>
    </div>

    <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

        <symbol id="incorrect" viewBox="0 0 16 16">
            <path fill="none" d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
        </symbol>
       
        <symbol id="search" viewBox="0 0 16 16">
        <path fill="none" d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" />
        </symbol>

        <symbol id="filter" viewBox="0 0 16 16">
            <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none"/>
        </symbol>
        
        <symbol id="sun" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" stroke="none"/>
            <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
            <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
            <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
            <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
            <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
            <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
            <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
            <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
        </symbol>     

        <symbol id="refresh" viewBox="0 0 16 16">
            <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none"/>
            <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none"/>
            <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none"/>
            <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none"/>
        </symbol>

        <symbol id="v_arrow" viewBox="0 0 16 16">
            <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
        </symbol>

        <symbol id="checkmark" viewBox="0 0 16 16">
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
        </symbol>

        <symbol id="pencil" viewBox="0 0 16 16">
            <path d="M6 14.5H15" fill="none"/>
            <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none"/>
        </symbol>

        <symbol id="bin" viewBox="0 0 16 16">
            <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
            <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
        </symbol>

        <symbol id="dot" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="4" stroke="none"/>
        </symbol>

        <symbol id="abort" viewBox="0 0 16 16">
            <path d="M12.5 12.5L3.5 3.5" fill="none"/>
            <circle cx="8" cy="8" r="6.5" fill="none"/>
        </symbol>
    </svg>
</body>
  );
}

export default App;
