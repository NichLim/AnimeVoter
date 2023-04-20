import {List, Map, fromJS} from 'immutable';
import { expect } from 'chai';

import reducer from '../../src/reducer';

describe ('Reducer', () => {
    
    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                vote: Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({'Death Note': 1})
                })
            })
        };
        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Death Note', 'Steins;Gate'],
                tally: {'Death Note': 1}
            }
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Naruto', 'Steins;Gate'],
                    tally: {'Naruto': 1}
                }
            }
        };
        const nextState = reducer(initialState, action);
                
        expect(nextState).to.deep.equal(fromJS({
            vote: {
                pair: ['Naruto', 'Steins;Gate'],
                tally: {'Naruto': 1}
            }
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE', 
            state: {
                vote: {
                    pair: ['Naruto', 'Steins;Gate'],
                    tally: {'Naruto': 1}
                }
            }
        };

        const nextState = reducer(undefined, action);

        expect(nextState).to.deep.equal(fromJS({
            vote: {
                pair: ['Naruto', 'Steins;Gate'],
                tally: {Naruto: 1}
            }
        }));
    })

});