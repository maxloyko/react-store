import React from 'react'
import {useFilterContext} from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
    const {filtered_products:products, grid_view} = useFilterContext();
    if (products.length < 1) {
        return <h2 style={{textTransform:'none'}}>Sorry no product match your search...</h2>
    }
    if (!grid_view) {
        return <ListView products={products}></ListView>
    }
    return <GridView products={products}>product list</GridView>
}

export default ProductList
