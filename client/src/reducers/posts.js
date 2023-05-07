export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        case 'DELETE':
            return posts;
        default:
            break;
    }
}