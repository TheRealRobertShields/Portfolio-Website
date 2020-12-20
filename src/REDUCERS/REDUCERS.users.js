// eslint-disable-next-line
export default (users = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL_USERS':
            console.log(action.type);
            return action.payload;
        case 'CREATE_USER':
            console.log(action.type);
            return [ ...users, action.payload];
        default:
            return users;
    }
} 