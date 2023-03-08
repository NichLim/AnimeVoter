import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action){
    //figures out what function to call and calls it, returns current state if undefined and has an empty map as default.
    switch(action.type){
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            return state.update('vote', voteState => vote(voteState, action.entry));
    }
    return state;
    //this allows us to batch operations using a collection and getting the current state at the end
}
