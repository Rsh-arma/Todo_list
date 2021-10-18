export function changeStatus(data){
    return{
        type : 'CHANGESTATUS',
        payload:{
            data
        }
    }
}