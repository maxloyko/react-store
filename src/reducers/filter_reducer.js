import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS, SIDEBAR_OPEN,
} from '../actions'

const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let maxPrice = action.payload.map((p) => p.price)
            maxPrice = Math.max(...maxPrice)
            return {
                ...state,
                all_products: [...action.payload],
                filtered_products: [...action.payload],
                filters: {
                    ...state.filters,
                    max_price: maxPrice,
                    price: maxPrice
                }
            }
        case SET_GRIDVIEW:
            return {...state, grid_view: true}
        case SET_LISTVIEW:
            return {...state, grid_view: false}
        case UPDATE_SORT:
            return {...state, sort: action.payload}
        case SORT_PRODUCTS:
            const {sort, filtered_products: products} = state;
            let tempProducts = [...products];
            switch (sort) {
                case 'price-lowest':
                    tempProducts = tempProducts.sort((a, b) => a.price - b.price)
                    break;
                case 'price-highest':
                    tempProducts = tempProducts.sort((a, b) => b.price - a.price)
                    break;
                case 'name-a':
                    tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
                    break;
                case 'name-z':
                    tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name))
                    break;
                default:
            }
            return {...state, filtered_products: tempProducts}
        case UPDATE_FILTERS:
            const {name, value} = action.payload;
            return {...state, filters: {...state.filters, [name]: value}}
        case FILTER_PRODUCTS:
            console.log('filters')
            return {...state}
        case CLEAR_FILTERS:
            console.log('filters')
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    company: 'all',
                    category: 'all',
                    color: 'all',
                    price: state.filters.max_price,
                    shipping: false
                }
            }
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
    }
}
export default filter_reducer
