import TodoItem from "./TodoItem";
import todos from "./todos.json";
import ListGroup from 'react-bootstrap/ListGroup';


export default function TodoList() {
 return(
   <>
     <h3>Todo List</h3>
     <ListGroup>
       {todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
))}
     </ListGroup><hr/>
    
   </>

);}
