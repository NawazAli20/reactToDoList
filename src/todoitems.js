export default function ToDoItems(props){
        const taskItems = props.items;
        const removeItems = props.remove;

        return(
            <>
                <ol>
                {
                    taskItems.map(
                        task=><li key={task.key}>{task.task}&nbsp;
                        <button onClick={()=>removeItems(task.key)}>X</button>
                         </li>
                    )
                }
                </ol>
            </>
        )
}