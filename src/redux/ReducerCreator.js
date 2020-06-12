

export const reducerCreator = (state = { isLoading: false, errMess: null, }, { type, payload }) => {
    switch (type) {
        case 'SEARCH':
            return {
                ...state,
                userList: payload,
                isLoading: false
            }
        case 'USER_DETAIL':
            return {
                ...state,
                userDetail: payload,
                isLoading: false
            }
        case 'USER_REPO':
            return {
                ...state,
                userRepoList: payload,
                isLoading: false
            }
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'RESET_RESULT':
            return {
                ...state,
                userList: [],
                userDetail: [],
                userRepoList: [],
                errMess: null
            }
        case 'ERROR_LOADING_SEARCH':
            return {
                ...state,
                isLoading: false,
                errMessSearch: payload
            }
        case 'ERROR_LOADING_CARD':
            return {
                ...state,
                isLoading: false,
                errMessCard: payload
            }
        case 'ERROR_LOADING_REPO':
            return {
                ...state,
                isLoading: false,
                errMessRepo: payload
            }
        default:
            return state
    }
}