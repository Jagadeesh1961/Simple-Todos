import './index.css'

const TodoItem = props => {
  const {todo, onClickDeleteTodo} = props
  const {title, id} = todo

  const deleteTodo = () => {
    onClickDeleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
