// eslint-disable-next-line
export default (base = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_BASE':
            return base;
        case 'CREATE_BASE':
            return base;
        default:
            return base;
    }
} 