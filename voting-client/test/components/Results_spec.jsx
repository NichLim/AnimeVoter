import React from "react";
import ReactDOM from "react-dom/client";
import {act} from "@testing-library/react"
import {expect} from 'chai'
import {List, Map} from 'immutable'
import Results from "../../src/components/Results";
import { findDOMNode } from "react-dom";

describe("Results", () => {

    it('renders entries with vote counts or zero', () => {
        
        const pair = List.of('Death Note', 'Steins;Gate');
        const tally = Map({'Death Note': 5});
        const rootElement = document.createElement('div')
        
        act(()=>{
        const root = ReactDOM.createRoot(rootElement);
        root.render(<Results pair={pair} tally={tally} />);
        });

        const entries = rootElement.querySelectorAll('.entry');
        const [death, steins] = Array.from(entries).map(e => e.textContent);

        expect(entries.length).to.equal(2);
        expect(death).to.contain('Death Note');
        expect(death).to.contain('5');
        expect(steins).to.contain('Steins;Gate');
        expect(steins).to.contain('0');
    });

    it('invokes the next callback when next button is clicked', () =>{
        let nextInvoked = false;
        const next = () => nextInvoked = true;

        const pair = List.of('Death Note', 'Steins;Gate');
        const rootElement = document.createElement('div');
        act( () => {
            const root = ReactDOM.createRoot(rootElement);
            root.render(<Results pair={pair}
                                 tally={Map()}
                                 next={next}/>
            );
        });

        const nextButton = rootElement.querySelector('.next');
        act(()=>{
            nextButton.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
        });

        expect(nextInvoked).to.equal(true);
        
    })

    it('renders the winner when there is one', () => {
        const rootElement = document.createElement('div');
        act( () => {
            const root = ReactDOM.createRoot(rootElement);
            root.render(<Results winner={"Death Note"}
                                 pair={["Death Note", "Steins;Gate"]}
                                 tally={Map()}/>)
        });

        const winner = findDOMNode(rootElement);
        // eslint-disable-next-line no-unused-expressions
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Death Note')
    });
});