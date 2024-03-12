
import {Component} from "react";

class TodoList extends Component {
    render() {
        let { todoitem, deleteme, updateme }  = this.props;


        return (
            <>
                {todoitem.map((ele, index) => (
                    <div className="todo-list" key={index}>
                        <input className="todo-item" type="text" value={ele} onChange={(e)=>{updateme(index, e.target.value )}}/>
                        <button className="delete-button" onClick={deleteme}>Done</button>
                    </div>
                ))}
            </>
        );
    }
}

export default TodoList;
