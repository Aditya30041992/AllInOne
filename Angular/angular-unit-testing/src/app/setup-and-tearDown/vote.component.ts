export class voteComponent{
    totalVotes = 0;
    
    upVote() {
        this.totalVotes++;
    }

    downVote() {
        this.totalVotes--;
    }
}