import {Component} from 'react'

import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  onClickDeleteTodo = id => {
    const {todosList} = this.state

    const filteredList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: filteredList,
    })
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="simple-todo-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="ul-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todo={eachTodo}
                key={eachTodo.id}
                onClickDeleteTodo={this.onClickDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
