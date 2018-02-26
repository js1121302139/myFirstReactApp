const  ADD_GUN = 'add';
const  REMOVE_GUN = 'remove';

export function counter(state=0,action) {
    switch (action.type){
        case ADD_GUN:
            return state+1;
        case REMOVE_GUN:
            return state-1;
        default:
            return 10;

    }
}

export function addGun() {
    return {type:ADD_GUN}
}
export function removeGun() {
    return {type:REMOVE_GUN}
}
export function syncGun() {
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addGun())
        },1000)
    }
}