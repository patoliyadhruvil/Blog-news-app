import {
    CREATEUSERREQ, CREATEUSERRES, CREATEUSERREJ,
    DELETEUSERREQ, DELETEUSERRES, DELETEUSERREJ,
    GETUSERREQ, GETUSERRES, GETUSERREJ,
    SINGLEUSERREQ, SINGLEUSERRES, SINGLEUSERREJ,
    UPDATEUSERREQ, UPDATEUSERRES, UPDATEUSERREJ
} from "../const";

const initialState = {
    users: [],
    user: null,
    isLoading: false,
    err: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEUSERREQ:
        case GETUSERREQ:
        case SINGLEUSERREQ:
        case UPDATEUSERREQ:
        case DELETEUSERREQ:
            return {
                ...state,
                isLoading: true,
            };

        case CREATEUSERRES:
        case GETUSERRES:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
            };

        case SINGLEUSERRES:
        case UPDATEUSERRES:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };

        case DELETEUSERRES:
            return {
                ...state,
                isLoading: false,
                users: state.users.filter((user) => user.id !== action.payload),
            };

        case CREATEUSERREJ:
        case GETUSERREJ:
        case SINGLEUSERREJ:
        case UPDATEUSERREJ:
        case DELETEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "Something went wrong ...",
            };

        default:
            return state;
    }
};
