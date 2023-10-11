import { VoteComponent } from './vote.component'
describe('VoteComponent', () => {

    let component : VoteComponent;

    //beforeAll(() => {});
    beforeEach(() => {
        //set up
        component = new VoteComponent();
    });
    //afterEach(() => {/**clean up/tear down*/});
    //afterAll(() => {});

    it('should increment totalVotes when upvoted', () => {
        //Arrange
        //let component = new VoteComponent();
        //Act
        component.upVote();
        //Assert
        expect(component.totalVotes).toBe(1);
    });
    it('should decrement totalVotes when downvoted', () => {
        component.downVote();
        
        expect(component.totalVotes).toBe(-1);
    });
});