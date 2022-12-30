import React from 'react'; 
import Player from '../player/player.component';

//changed leaderboard to leaders in deconstruction 
    //apparently you deconstruct from the prop not the information passed down
        //i.e. im not deconstructing the state, rather i am deconstructing the props. 
            //which in hindsight makes sense, but didnt at the moment. 
 const Leaderboard = ({leaders}) => {
   // console.log('leaderBoard-component',leaderBoard)
   // const { Name, Rank, TotalScore } = leaders;
    // const [leaderBoard, setLeaderboard] = useState([]);
    // // console.log(leaderboard)
    // // useEffect(() => {
    // //     fetch('localhost:3000/gimme/api')
    // //         .then(res => res.json())
    // //         .then(players => setLeaderBoard(players))
    // // }, []);

    return (
        <div className = 'leaderboard' >
        {leaders.map((Name) => { //parenthesis rather than curly bracket elemenates need for return statement; 
          return <Player Name = {Name}/>
        })}
      </div>
    )
}

export default Leaderboard;