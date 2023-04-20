import { Map, fromJS } from "immutable";

function setState(newState, state = Map()){
    return state.mergeDeep(fromJS(newState));
}

export default function reducer(state = Map(), action){
    switch (action.type){
        case 'SET_STATE':
            return setState(action.state, state);
        default:
            return state;
    }
}
    