let initstate = [];

let lastId = 0;

function listReducer(state = initstate ,action){
    
    if(action.type === "ADD"){
        return[
            ...state ,{
                id : ++lastId,
                name:action.payload.data.name,
                status:'undone',
                date : action.payload.data.date
            }
        ]
            
    }
    else if(action.type === "CHANGESTATUS"){
        return state.map(task => task.id === action.payload.data ? {...task,status:'done'} :task
        )
            
    }

    else if(action.type === "CLEARTASK"){
        return state.filter(task => task.status === 'undone' 
        )
            
    }

    return state;
}

export default listReducer;