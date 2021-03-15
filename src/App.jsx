import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

import "./index.css"
const App = (props) => {
    useEffect(() => {
       props.getItems() 
    },[])
    const [value,setState] = useState("")
    const handleChange = e => {
setState(e.target.value)
console.log(value)
    }
    const addNewItem = e => {
        e.preventDefault()
        if (props.items.filter(item => (
item === value
        )).length === 0 && value.length > 1){
            props.addItem(value)
        }
    }
    return (
        <div className="outerbox">
            <h1>My Wishlist!</h1>
             <div className="innerBox">
                <ul>
                    {
                        props.items.map(item => (
                            <li onClick={() => props.deleteItem(item)}>{item}</li>
                        )
                            )
                    }
                </ul>
             </div>
             <form>
             <br/>
                 <br/>
                 <input onChange={handleChange} value={value} name="value" />
                 <br/>
                 <br/>
                 <button onClick={addNewItem}> Add</button>
                 <br/>
                 <button onClick={e => {
                     e.preventDefault()
                     props.submit()
                    alert("Wishlist Sumbitted to Santa")
                    }
                     }> Submit</button>
             </form>
        </div>
    )
}
function mapStateToProps(state) {
    return {
      items: state.items,
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      getItems: () => {
        dispatch(getItems());
      },
      addItem: (item) => {
        dispatch(addItem(item));
      },
      deleteItem: (item) => {
        dispatch(deleteItem(item));
      },
      submit: () => {
        dispatch(submit());
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);


