import { createStore } from 'redux'
/**
* * store 保险箱 
* *     subscribe()：监听保险箱的变化
* *     dispatch(): 修改保险箱的记录
* * reducer() 保险箱管理员，可以新建 store
* * action
* *   type:动作的类型、种类
* *

* * redux如何和react一起用
* * 1、手动链接
* * 把store.dispatch方法传递给组件，内容可以调用修改状态
* *   
*/
// 统一管理 action.type

// function counter(state=0,action){
//     switch(action.type){
//         case "加机关枪":
//             return state+1;
//         case "减机关枪":
//             return state-1;
//         default:
//             return 10;
//     }
// }

// const store = createStore(counter);
// // 初始的 store 的状态值
// const init = store.getState(); //初始值是 10

// store.subscribe(function(){
//     const current = store.getState();
//     console.log(`现在机关枪有${current}把`);
// });

// store.dispatch({
//     type:'加机关枪'
// });
// store.dispatch({
//     type:'减机关枪'
// });



// 统一管理保险箱管理员的动作类型 action.type
const ADD_GUN = "加机关枪";
const REMOVE_GUN = "减机关枪";

export function counter(state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state+1;
        case REMOVE_GUN:
            return state-1;
        default:
            return 10;
    }
}

//保险箱管理员的动作生成器
export function addGun(){
    return {type:ADD_GUN}
}
export function removeGun(){
    return {type:REMOVE_GUN}
}