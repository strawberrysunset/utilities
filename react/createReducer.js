export const createReducer = (methods) => {
    return (state, action) => {
        if (!methods[action]) return new Error('Undefined method.');
        return methods[action](state, action);
    }
}
