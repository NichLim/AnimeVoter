import {List, Map} from 'immutable';
import { expect } from 'chai';
import {setEntries, next, vote} from '../src/core';

describe('application logic', () => {

    describe('setEntries', () => {

        it('adds the entries to the state', () => {
            const state = Map();
            const entries = List.of('Death Note', 'Steins;Gate');
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Death Note', 'Steins;Gate')
            }));
        });
        it('converts to immutable', () => {
            const state = Map();
            const entries = ['Death Note', 'Steins;Gate'];
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Death Note', 'Steins;Gate')
            })); 
        });
    }); 

    describe('next', () => {

        it('takes the next two entries under vote', () => {
          const state = Map({
            entries: List.of('Death Note', 'Steins;Gate', 'Haikyuu!')
          });
          const nextState = next(state);
          expect(nextState).to.equal(Map({
            vote: Map({
              pair: List.of('Death Note', 'Steins;Gate')
            }),
            entries: List.of('Haikyuu!')
          }));

        });
        
        it('puts winner of current vote back to entries', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Death Note': 4,
                        'Steins;Gate': 2
                    })
                }),
                entries: List.of('Haikyuu!','Fullmetal Alchemist: Brotherhood', 'Bleach Sennen Kessen-hen')
            });
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Haikyuu!','Fullmetal Alchemist: Brotherhood')
                }),
                entries: List.of('Bleach Sennen Kessen-hen', 'Death Note')
            }))
        })

        it('puts both from tied vote back to entries', () =>{
            const state = Map({
                vote: Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Death Note': 3,
                        'Steins;Gate': 3
                    })
                }),
                entries: List.of('Haikyuu!','Fullmetal Alchemist: Brotherhood','Bleach: Sennen Kessen-hen')
            })
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Haikyuu!','Fullmetal Alchemist: Brotherhood')
                }),
                entries: List.of('Bleach: Sennen Kessen-hen', 'Death Note','Steins;Gate')
            }));
        })
        
        it('marks winner when just one entry left', () =>{
            const state = Map({
                vote: Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Steins;Gate': 4,
                        'Death Note': 2
                    })
                }),
                entries: List()
            });
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                winner: 'Steins;Gate'
            }));
        });
    });
    
    describe('vote', () => {

        it('creats a tally for the voted entry', () => {
            //changed vote so it doesnt deal with the whole state            
            const state = Map({ 
                    pair: List.of('Death Note', 'Steins;Gate')
            });
            const nextState = vote(state, 'Death Note');
            expect(nextState).to.equal(Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Death Note': 1
                    })
             }));
        
        it('adds to existing tally for the voted entry', () => {
            const state = Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Death Note': 3,
                        'Steins;Gate': 2
                })
            });        
            const nextState = vote(state, 'Death Note');
            expect(nextState).to.equal(Map({
                    pair: List.of('Death Note', 'Steins;Gate'),
                    tally: Map({
                        'Death Note': 4,
                        'Steins;Gate': 2
                    })
            }));
        });
       
    });
        
});
});
