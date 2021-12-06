

const initialState = {
    userId: '',
    userName: 'Mami',

}


const R_User = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'selam':
            return state;
        default:
            return state;
    }
}

export default R_User;