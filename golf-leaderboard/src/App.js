// import logo from './logo.svg';
import './App.css';

import  {useState, useEffect} from 'react'; 
import Leaderboard from './components/leaderboard/leaderboard.component';

// import Player from './components/player/player.component';

//todo
    //1:
        //set up states for three portions of fetch req
        //confirm data is received on frontend
        //pass data to leaderboard and player components
    //2: render players in individual divs on page
    //3: TBD
const App = () => {
    const [leaderBoard, setLeaderBoard] = useState([]);
     
    useEffect(() => {
      console.log('useEffect')
      //fixed endpoint. not fetching localhost, fetching endpoint
        fetch('/gimme/test')
            .then(res => res.json())
            .then(players => setLeaderBoard(players))
        // setLeaderBoard([{'Name': 'Tanner', 'Rank': 3, 'TotalScore': 62}]);
        //setLeaderBoard({'Name': 'Tanner', 'Rank': 3, 'TotalScore': 62});
        
//         //api to access current season
//          //const currentSeasonApi = `https://api.sportsdata.io/golf/v2/json/CurrentSeason`;

//         // //api to access tournaments via season 
//         // //const TournamentIdApi = `https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`

//         // //api to access leaderboard of a tournament
//         // //const leaderboardApi = `https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`;

//         // //site wide api key (https://sportsdata.io/developers/api-documentation/golf)
//         // const apiKey = '74708e84c6d243bc832af07d61be8d8d';
//         let tournamentId;
//         let seasonId;
//         //let token = '74708e84c6d243bc832af07d61be8d8d'
       
//         fetch(`https://api.sportsdata.io/golf/v2/json/CurrentSeason`, {
//           mode: 'no-cors',
//           method: 'GET',
//           credintials: 'include',
//           headers: {
//               'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
//             //   'Accept': 'application/json', 
//             //   'Content-type': 'application/json',
//             //   'Access-Control-Allow-Origin': 'include'
//           }
//   }) 
//       .then((data) => data.json())
//       .then((data) => {
//           // res.locals.season = data.SeasonID
//           // console.log(data.SeasonID);
//           seasonId = data.SeasonID;
  
//           // next(); 
//       })
//       .catch(err => createErr({ 
//                 log: 'getSeason middleware Error',  
//                 status: 500,
//                 message: {err: 'error in getSeason middlware'}
//          }));
    
  
//   //middleware to access tournament:

//       fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`,{
//         mode: 'no-cors',
//           method: 'GET',
//           credintials: 'include',
//           headers: {
//               'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
//               'Accept': 'application/json',
//               'Content-type': 'application/json',
//               'Access-Control-Allow-Origin': 'include'
//           }
//   })
//      .then((data) => data.json())
//      .then((data) => {
//       for(let i = 0; i < data.length; i++){
//           if(data[i].hasOwnProperty('StartDate') || data[i].hasOwnProperty('EndDate')){
//               if(data[i].StartDate === currentDate(Date(), 0) || data[i].StartDate === currentDate(Date(), 1) || data[i].StartDate === currentDate(Date(), 2) || data[i].StartDate === currentDate(Date(), 3) || data[i].StartDate === currentDate(Date(), 4) || data[i].EndDate === currentDate(Date(), 0) || data[i].EndDate === currentDate(Date(), 1) || data[i].EndDate === currentDate(Date(), 2) || data[i].EndDate === currentDate(Date(), 3) || data[i].EndDate === currentDate(Date(), 4)){
//                   tournamentId = data[i].TournamentID;
//                   console.log(tournamentId)
//           }
//        }
//       }
//       // next()
//      })
//      .catch(err => createErr({
//             log: 'getTournament middleware Error', 
//             status: 400,
//             message: {err: 'error in getTournament middlware'}
//      }));
  
  
//   //middleware to access leaderboard

//       fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`,{
//           mode: 'no-cors',
//           method: 'GET',
//           credintials: 'include',
//           headers: {
//               'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
//               'Accept': 'application/json',
//               'Content-type': 'application/json',
//               'Access-Control-Allow-Origin': 'include'
//           }
//       })
//       .then((data) => data.json())
//       .then((data) => {
//           // console.log(data)
//           const leaders = []; 
//           // for(let i = 0; i < data.Tournament.Players.length; i++){
//           //     if(i <= 10){
//           //         leaders.push(data.Tournament.Players[i])
//           //     }
//           //  }
//            let i = 0; 
//            while(i < 10){
//               leaders.push(data.Players[i].Name)
//               i++
//            }
//            console.log(leaders)
//            console.log(leaders.length)
//            setLeaderboard(leaders);
//            console.log('leaders')
//           //  res.locals.leaders = leaders
//           //  next();
//       })
//       .catch(err => createErr({
//                 log: 'getLeaderboard middleware Error', 
//                 status: 400,
//                 message: {err: 'error in getLeaderboard middlware'}
//          }));

        // //middleware to access season: 
        //     fetch('https://api.sportsdata.io/golf/v2/json/CurrentSeason', {
        //         mode: 'no-cors',
        //         method: 'GET',
        //         headers: {
        //             'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //             'Accept': 'application/json', 
        //             'Content-type': 'application/json'
        //         }
        //     }) 
        //     .then((data) => data.json())
        //     .then((data) => {
        //         // res.locals.season = data.SeasonID
        //         // console.log(data.SeasonID);
        //         seasonId = data.SeasonID; 
        //         console.log(seasonId)
        //         console.log('seasonId')
        //         // next(); 
        //         // setLeaderboard(data);
        //     })
        //     .then(fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments/${seasonId}`,{
        //                 mode: 'no-cors',
        //                 method: 'GET',
        //                 headers: {
        //                     'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //                     'Accept': 'application/json',
        //                     'Content-type': 'application/json'
        //                 }
        //         })
        //         .then((data) => data.json())
        //         .then((data) => {
        //             for(let i = 0; i < data.length; i++){
        //                 if(data[i].hasOwnProperty('StartDate') || data[i].hasOwnProperty('EndDate')){
        //                     if(data[i].StartDate === currentDate(Date(), 0) || data[i].StartDate === currentDate(Date(), 1) || data[i].StartDate === currentDate(Date(), 2) || data[i].StartDate === currentDate(Date(), 3) || data[i].StartDate === currentDate(Date(), 4) || data[i].EndDate === currentDate(Date(), 0) || data[i].EndDate === currentDate(Date(), 1) || data[i].EndDate === currentDate(Date(), 2) || data[i].EndDate === currentDate(Date(), 3) || data[i].EndDate === currentDate(Date(), 4)){
        //                         // res.locals.tournament = data[i].TournamentID;
        //                         tournamentId = data[i].TournamentID;
        //                         console.log('tournamentID')
        //                         // console.log(res.locals.tournament)
        //                 }
        //             }
        //             }
        //             // next()
        //         })
        //         .then( fetch(`https://api.sportsdata.io/golf/v2/json/Leaderboard/${tournamentId}`,{
        //             mode: 'no-cors',
        //             method: 'GET',
        //             headers: {
        //                 'Ocp-Apim-Subscription-Key': '74708e84c6d243bc832af07d61be8d8d',
        //                 'Accept': 'application/json',
        //                 'Content-type': 'application/json'
        //             }
        //             })
        //             .then((data) => data.json())
        //             .then((data) => {
        //                 // console.log(data)
        //                 const leaders = []; 
        //                 // for(let i = 0; i < data.Tournament.Players.length; i++){
        //                 //     if(i <= 10){
        //                 //         leaders.push(data.Tournament.Players[i])
        //                 //     }
        //                 //  }
        //                 let i = 0; 
        //                 while(i < 10){
        //                     leaders.push(data.Players[i].Name)
        //                     i++
        //                 }
        //                 // console.log(leaders)
        //                 // console.log(leaders.length)
        //                 // res.locals.leaders = leaders
        //                 setLeaderboard(leaders);
        //                 console.log('leaders')
        //                 // next();
        //             })
        //     //         .catch(err => createErr({
        //     //                 log: 'getLeaderboard middleware Error', 
        //     //                 status: 400,
        //     //                 message: {err: 'error in getLeaderboard middlware'}
        //     // }))
        //     )
        //         // .catch(err => createErr({
        //         //         log: 'getTournament middleware Error', 
        //         //         status: 400,
        //         //         message: {err: 'error in getTournament middlware'}
        //         // }))
        //         )
        //     .catch(err => createErr({ 
        //             log: 'getSeason middleware Error',  
        //             status: 500,
        //             message: {err: 'error in getSeason middlware'}
        //     }));
        //     const leaders = []; 
        //                             // for(let i = 0; i < data.Tournament.Players.length; i++){
        //                             //     if(i <= 10){
        //                             //         leaders.push(data.Tournament.Players[i])
        //                             //     }
        //                             //  }
        //                             let i = 0; 
        //                             while(i < 10){
        //                                 leaders.push(data.Players[i].Name)
        //                                 i++
        //                             }
        //                             // console.log(leaders)
        //                             // console.log(leaders.length)
        //                             // res.locals.leaders = leaders
        //                             setLeaderboard(leaders);
        //                             console.log(leaderBoard)
        //                             // next();
            //     function currentDate(date, num = 0) {
            //       let d = new Date(date),
            //           month = '' + (d.getMonth() + 1),
            //           day = '' + (d.getDate() + num) ,
            //           year = d.getFullYear();
            
            //       if (month.length < 2) month = '0' + month;
            //       if (day.length < 2) day = '0' + day;
            
            //       return ([year, month, day].join('-')+ 'T00:00:00');
            //   };
            //     const createErr = (errInfo) => {
            //           const { log, message } = errInfo; 
            //           return {
            //               log: `${log}`, 
            //               message: { err: `${message}`}
            //           }
            //       }
    }, []);


    return (
        <div className='App'>
            <Leaderboard leaders = {leaderBoard}/> 
            
        </div>
        )
    };

    export default App; 
