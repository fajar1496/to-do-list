import './App.css';
import {useState} from 'react';
function App() {

  const [todolist, setTodolist] = useState([])
  const[form, setForm] = useState({
    todo: '',
    status : false,
  })
  const resetInput = () => {
    setForm({
      todo : '',
      status : false
    })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      todo:e.target.value,
      status : false
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.index || form.index === 0){
      const newTodo = todolist.map((e, i) => {
        if (i=== form.index){
          return form
        } else{
          return e
        }
       } )
       setTodolist(newTodo)
    } else{
    setTodolist([
      ...todolist,
      form
    ])
  }
    resetInput() 
  }
  const handleCheck = (index) =>{
    const newTodo = todolist.map((e,i) =>{
      if(i===index){
        return{
          todo: e.todo,
          status : true
        }
        } else{
          return e
        }
      })
      setTodolist(newTodo);
    }
    const handleDelete = (index) =>{
      const newTodo = todolist.filter((e, i)=>{
        if(i !== index){
          return e
      }
    })
    setTodolist(newTodo)
  }
  const handleEdit = (index)=>{
    const detailTodo = {
      index,
      ...todolist[index]
    }
    setForm(detailTodo)
  }
  return (
    <div>
      <div className="jumbotron">
        <h1>Todo List</h1>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <input type="text" name="todo" value={form.todo}  onChange={handleChange} placeholder="Create to do"/>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
      <div className="content">
{
  todolist.map((e, i) => (
    <div key={i} className="card">
    <div className="action">
      <input type="checkbox" checked={e.status?true:false} onChange={() => {handleCheck(i)}}/>
    </div>
    <div className="text">
      {e.todo}
    </div>
    <div className="button-action">
      <button className="btn-edit" onClick={()=>{handleEdit(i)}}>Edit</button>
      <button className="btn-delete" onClick={()=>{handleDelete(i)}}>Delete</button>
    </div>
  </div>
  ))
}
        
      </div>
    </div>
  );
}

export default App;