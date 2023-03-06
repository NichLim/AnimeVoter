import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_ENTRIES', () => {
        const initialState = Map();
        const action = {type: 'SET_ENTRIES', entries: ['Death Note']};
        const nextState = reducer(initialState, action);
        
        expect(nextState).to.equal(fromJS({
            entries: ['Death Note']
        }))
    })

    it('handles NEXT', () => {
        const initialState = fromJS({
            entries: ['Death Note', 'Steins;Gate']
        });
        const action = {type: 'NEXT'};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Death Note', 'Steins;Gate']
            },
            entries: []
        }));    
    });

    it('handles VOTE', () => {
        const initialState = fromJS({
            vote: {
                pair: ['Death Note', 'Steins;Gate']
            },
            entries: []
        });
        const action = {type: 'VOTE', entry: 'Death Note'};
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Death Note', 'Steins;Gate'],
                tally: {'Death Note': 1}
            },
            entries: []
        }));
    });

    it('has an initial state', () => {
        const action = {type: 'SET_ENTRIES', entries: ['Death Note']};
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            entries: ['Death Note']
        }));
    });

    it('can be used with reduce', () => {
        //given a collection of actions, you can actually just reduce that collection into the current state
        const actions = [
            {type: 'SET_ENTRIES', entries: ['Death Note', 'Steins;Gate']},
            {type: 'NEXT'},
            {type: 'VOTE', entry: 'Death Note'},
            {type: 'VOTE', entry: 'Steins;Gate'},
            {type: 'VOTE', entry: 'Death Note'},
            {type: 'NEXT'}
        ]
        const finalState = actions.reduce(reducer, Map());

        expect(finalState).to.equal(fromJS({
            winner: 'Death Note'
        }));
    });
});