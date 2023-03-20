import Voting from "../../src/components/Voting";
import React from "react";
import ReactDOM from "react-dom";
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from "react-dom/test-utils";
import {expect} from 'chai'


describe('Voting', () => {

    it ('renders a pair of buttons', () =>{
        const component = renderIntoDocument(<Voting pair={['Death Note', 'Steins;Gate']}/>);
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Death Note');
        expect(buttons[1].textContent).to.equal('Steins;Gate');

    });

    it ('invokes a callback when a button is clicked', () =>{
        let votedWith;
        const vote = (entry) => votedWith = entry;

        const component = renderIntoDocument(
        <Voting pair={['Death Note', 'Steins;Gate']}
                vote={vote}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Death Note');
    });

    it('disables buttons when user has voted', () => {
        const component = renderIntoDocument(
            <Voting pair={['Death Note', 'Steins;Gate']}
                    hasVoted='Death Note'/>
            );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].hasAttribute('disabled')).to.equal(true);
        expect(buttons[1].hasAttribute('disabled')).to.equal(true);

    })

    it('adds label to the voted entry', () => {
        const component = renderIntoDocument(<Voting pair={['Death Note', 'Steins;Gate']} hasVoted="Death Note"/>);
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons[0].textContent).to.contain('Voted');
    })

    it('renders just the winner when there is one', () => {
        const component = renderIntoDocument(<Voting winner="Death Note" />);
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(component.refs.winner);
        // eslint-disable-next-line no-unused-expressions
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Death Note');

    })

})