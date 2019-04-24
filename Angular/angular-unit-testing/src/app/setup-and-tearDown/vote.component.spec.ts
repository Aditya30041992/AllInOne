import { voteComponent } from './vote.component';
// refined  example of testing

describe('upVote', () => {
    let component: voteComponent;

    beforeEach( () => {
            component = new voteComponent();
    })

    it('should increment totalVotes when upVote', () => {
        // Act
        component.upVote();

        //Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downVote', () => {
        // Act
        component.downVote();

        //Assert
        expect(component.totalVotes).toBe(-1);
    });

});



// sample example of testing

// describe('upVote', () => {

//     it('should increment totalVotes when upVote', () => {
//         // Arrange 
//         let component = new voteComponent();

//         // Act
//         component.upVote();

//         //Assert
//         expect(component.totalVotes).toBe(1);
//     });

//     it('should decrement totalVotes when downVote', () => {
//         // Arrange 
//         let component = new voteComponent();

//         // Act
//         component.downVote();

//         //Assert
//         expect(component.totalVotes).toBe(-1);
//     });

// });

