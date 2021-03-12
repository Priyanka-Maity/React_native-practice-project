export const CartContext = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state, { ...action.payload }
            ]
        // case 'DELETE':
        //     return state.filter(employee => employee.id !== action.payload)
        default:
            throw new Error()
    }
}