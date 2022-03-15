
const initialState = {
    membersReact: [],
    membersJava: [],
}

const memberReducer = (state = initialState, action) => {
    if (action.payload?.classType === 'react') {
        switch (action.type) {
            case 'addMember':
                return {
                    ...state,
                    membersReact: [...state.membersReact, action.payload]
                }
            case 'setMember':
                return {
                    ...state,
                    memberForm: action.payload
                }
            case 'editMember':
                return {
                    ...state,
                    membersReact: [...state.membersReact, action.payload]
                }
        
            default:
                return state
        }
    } else {
        switch (action.type) {
            case 'addMember':
                return {
                    ...state,
                    membersJava: [...state.membersJava, action.payload]
                }
            case 'setMember':
                return {
                    ...state,
                    memberForm: action.payload
                }
            case 'editMember':
                return {
                    ...state,
                    membersJava: [...state.membersJava, action.payload]
                }
            default:
                return state
        }
    }
}

export default memberReducer