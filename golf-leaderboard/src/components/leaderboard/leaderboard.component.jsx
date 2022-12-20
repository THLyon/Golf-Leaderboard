import React from 'react'; 
import Player from '../player/player.component';

 const Leaderboard = ({leaderBoard}) => {
    console.log('leaderBoard-component',leaderBoard)
    const { rank} = leaderBoard;
    // const [leaderBoard, setLeaderboard] = useState([]);
    // console.log(leaderboard)
    // useEffect(() => {
    //     fetch('localhost:3000/gimme/api')
    //         .then(res => res.json())
    //         .then(players => setLeaderBoard(players))
    // }, []);

    return (
        <div className = 'leaderboard'>
        {leaderBoard.map((player) => { //parenthesis rather than curly bracket elemenates need for return statement; 
          return <Player key ={rank} player = {player}/>
        })}
      </div>
    )
}

export default Leaderboard;