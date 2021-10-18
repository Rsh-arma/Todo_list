

export function addTask(data){
    return{
         type: 'ADD',
         payload:{
             data : data
         }
    }
}