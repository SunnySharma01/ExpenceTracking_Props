import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';
function ExpenceItem (props){
    return(
        <div className='expense-item'>
            <ExpenceDate date={props.date}/>
            <div className='expense-item_desription'> 
            <h2>{props.title}</h2>
            <div className='expence-item_price'>${props.amount}</div>
            </div>
         </div>
    );
}
export default ExpenceItem;