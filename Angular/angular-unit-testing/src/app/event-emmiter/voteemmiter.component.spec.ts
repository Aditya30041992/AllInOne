import { VoteEmmiterComponent } from './voteemmiter.component';

describe('voteemmiter', () => {
    
    var component : VoteEmmiterComponent;

    beforeEach( () => {
        component = new VoteEmmiterComponent;
    });

    it('should raise voteChanged event when upVoted', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv);

        component.upVote();

        //expect(totalVotes).not.toBeNull();

        expect(totalVotes).toBe(1);
    })

});
