import Voting from "../../src/components/Voting";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {act} from "@testing-library/react"
import {expect} from 'chai'


describe('Voting', () => {

    it ('renders a pair of buttons', () =>{
        const rootElement = document.createElement('div');
        act(() =>{
            createRoot(rootElement).render(<Voting pair={['Death Note', 'Steins;Gate']}/>)
        })
        
        const buttons = rootElement.querySelectorAll('button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Death Note');
        expect(buttons[1].textContent).to.equal('Steins;Gate');

    });

    it ('invokes a callback when a button is clicked', () =>{
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const rootElement = document.createElement('div');
        act(()=>{
            createRoot(rootElement).render(<Voting pair={['Death Note', 'Steins;Gate']}
            vote={vote}/>);
        })

        const button = rootElement.querySelector('button');
        act(()=>{
            button.dispatchEvent(new window.MouseEvent('click', {bubbles: true}));
        })

        expect(votedWith).to.equal('Death Note');
    });

    it('disables buttons when user has voted', () => {

        const rootElement = document.createElement('div');
        act(()=>{
            createRoot(rootElement).render(<Voting pair={['Death Note', 'Steins;Gate']}
            hasVoted='Death Note'/>);
        })

        const buttons = rootElement.querySelectorAll('button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);

    })

    it('adds label to the voted entry', () => {

        const rootElement = document.createElement('div');
        act(()=>{
            createRoot(rootElement).render(<Voting pair={['Death Note', 'Steins;Gate']}
            hasVoted='Death Note'/>);
        })

        const buttons = rootElement.querySelectorAll('button');

        expect(buttons[0].textContent).to.contain('Voted');
    })

    it('renders just the winner when there is one', () => {
        const rootElement = document.createElement('div');
        act(()=>{
            createRoot(rootElement).render(<Voting winner='Death Note'/>);
        })

        const buttons = rootElement.querySelectorAll('button');
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(rootElement);
        // eslint-disable-next-line no-unused-expressions
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Death Note');

    })

})