const TodoItem = ( { todo = { done: true, title: 'Buy milk',
    status: 'COMPLETED' } }) => {
    return (
        
        <li className="list-group-item">
            <h3>To do item</h3>
            <input type="checkbox" className="me-2"
                   defaultChecked={todo.done}/>
            {todo.title} ({todo.status})<hr/>
        </li>
        
    );
}
export default TodoItem;