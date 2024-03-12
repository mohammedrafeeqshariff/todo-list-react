// Todo.jsx
import { Component } from "react";
import TodoList from "./todolists";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            todoItem: [],
        };
    }


    getInput = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    addTodo = () => {    
        if (this.state.inputValue.trim() !== '') {
            this.setState({
                todoItem: [...this.state.todoItem, this.state.inputValue],
                inputValue: "",
            });
        }
    };
    

    updateTodo = (index, value) => {
        const updatedTodoItem = [...this.state.todoItem];
        updatedTodoItem[index] = value;

        this.setState({
            todoItem: updatedTodoItem,
        });
    };

    deleteTodo = (e) => {
        const updatedTodoItem = [...this.state.todoItem];
        updatedTodoItem.splice(e, 1);
    
        this.setState({ 
            todoItem: updatedTodoItem
        });
    }

    render() {
        console.log(this.state.todoItem);

        return (
            <>
                <div className="adding-todo">
                    <h1>Add your to-do's !</h1>
                    <input type="text" id="input_tag" onChange={this.getInput} onKeyDown={(e) => e.key === 'Enter' && this.addTodo()} />
                    <span>
                        <button className="add-button" onClick={this.addTodo} >Add to-do</button>
                    </span>
                </div>

                <TodoList
                 inputvalue = {this.state.inputValue}
                  todoitem = {this.state.todoItem}
                  deleteme = {this.deleteTodo}
                  updateme = {this.updateTodo}
                   />
            </>
        );
    }
}

export default Todo;
