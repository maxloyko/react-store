export const formatPrice = (number) => {
    return Intl.NumberFormat('en-Us', {
        style: 'currency', currency: 'USD'
    }).format(number / 100)
}

export const getUniqueValues = () => {}
