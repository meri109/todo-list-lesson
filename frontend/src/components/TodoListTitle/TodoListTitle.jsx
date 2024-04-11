import React from 'react'
import './TodoListTitle.scss'
import { todoContext } from '../../App'


function TodoListTitle() {

    const {todos, setTodos} = React.useContext(todoContext)

    const stat =React.useMemo(() => {
        const totalTodosCount = todos.length
        const completedTodosCount = todos.filter(todo => todo.completed).length
        return [totalTodosCount, completedTodosCount]
    }, [todos])
    
    return (
        <div className='TodoListTitle'>
            <div className="total-todo">
                <div className="text">Total todos</div>
                <div className="count">{stat[0]}</div>
            </div>
            
            <div className='completed-todo'>
                <div className="text">Done</div>
                <div className="count">{stat[1]} / {stat[0]} </div>
            </div>

        </div>
    )
}

export default TodoListTitle
