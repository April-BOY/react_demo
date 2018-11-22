// 定义组件的状态管理，即定义保险箱管理员和他的动作
/**
* * store 保险箱 
* *     subscribe()：监听保险箱的变化
* *     dispatch(): 修改保险箱的记录
* * reducer() 保险箱管理员，可以新建 store
* * reducer函数接受state和action，返回新的state,可以用store.subscribe监听每次修改
* * action
* *   type:动作的类型、种类
* *

* * redux如何和react一起用(即将redux和组件关联起来)
* ! 1、手动链接
* * 把store.dispatch方法传递给组件，组件内部就可以调用dispatch方法来修改store的状态
* * 因为每次修改 store 的状态，需要同步到组件中，因此，需要在 index.js 中通过 store
* * 的 subscribe() 方法，监听 store 的变化，重新渲染组件（即 subscribe(render())）

* ! 处理异步：通过异步的方式改变组件的状态
* * redux默认只处理同步，异步任务需要redux-thunk中间件
* * 使用redux的方法applyMiddleware()开启中间件
* * 使用redux-thunk中间件后，action 就可以返回函数了，原本是只可以返回一个对象的
* ! 然后，使用dispatch提交action
* *
* ! 2、使用react-redux链接
* * 不再需要使用subscribe，只需要使用reducer，action，dispatch即可
* * react-redux提供 Provider和connect两个接口来链接
* * Provider组件在应用最外层，传入store即可，只用一次
* * connect负责从外部获取组件需要的参数
* * connect可以用装饰器的方法来写
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
// 初始的 store 的状态值
// const init = store.getState(); //初始值是 10
//! subscribe相当于store上的一个事件，store每次有修改，就会执行相应的动作。
//! 而这个动作就是subscribe()方法中的函数 
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
// 同步的动作
export function addGun(){
    return {type:ADD_GUN}
}
export function removeGun(){
    return {type:REMOVE_GUN}
}


// 异步的动作
// 通过异步的方式修改组件的状态
// ! action 就可以返回函数了,使用dispatch提交action
/**
* ! 这里的通过异步的方式去修改组件的状态，还是可以这样简单理解：
* ! 保险箱管理员在5000秒后才去修改保险箱的数据，而修改保险箱的数据是
* ! 通过dispatch()方法的，所以，这里就需要使用setTimeout()和dispatch()方法
*/
export function addGunSync(){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(addGun());
        }, 5000);
    }
}