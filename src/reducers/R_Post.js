

const initialState = {
    postId: '',
    postName: 'Mami',

}


const R_Post = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'selam':
            return state;
        default:
            return state;
    }
}

export default R_Post;