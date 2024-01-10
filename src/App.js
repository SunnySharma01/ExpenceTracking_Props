
import ExpenceItem from './components/ExpenceItem';

function App (){
  let expence = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 2330,
      date: new Date(2023,5,16)
    },
    {
      id: 'e2',
      title: 'College Fee',
      amount: 23350,
      date: new Date(2022,8,30)
    },
    {
      id: 'e3',
      title: 'Party',
      amount: 233,
      date: new Date(2023,12,18)
    },
    {
      id: 'e4',
      title: 'Shopping',
      amount: 9652,
      date: new Date(2024,1,1)
    }
  ];
  return(
    <div className='app-container'>
    <h1>Let's get started </h1>
    
    <ExpenceItem
      date={ expence[0].date}
      title={ expence[0].title}
      amount={ expence[0].amount}>
    </ExpenceItem>
    <ExpenceItem
      date={ expence[1].date}
      title={ expence[1].title}
      amount={ expence[1].amount}>
    </ExpenceItem>
    <ExpenceItem
      date={ expence[2].date}
      title={ expence[2].title}
      amount={ expence[2].amount}>
    </ExpenceItem>
    <ExpenceItem
      date={ expence[3].date}
      title={ expence[3].title}
      amount={ expence[3].amount}>
    </ExpenceItem>
    </div>
    
  );
}
export default App;