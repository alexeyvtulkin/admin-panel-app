import { combineReducers } from 'redux'
import { ordersReducer as orders} from './orders'
import { checkedOrdersReducer as checkedOrders} from './groupActions'
import { formReducer as form} from './modalForm'
import { paginationReducer as pagination } from './pagination'
import { dropdownReducer as dropdown } from './statusDropdown'


export const reducers = combineReducers({
    orders,
    form,
    checkedOrders,
    pagination,
    dropdown,
})