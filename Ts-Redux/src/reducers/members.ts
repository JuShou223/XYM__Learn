import { MemberEntity } from "../model";
//  对状态的计算，reduce 纯函数 返回当前的状态
// state, 初始值

export const membersReducer = (state:MemberEntity[]=[],action)=>{
    switch(action.type){
        case 'FETCH_MEMBER_COMPLETED':
            return action.playload
    }
    return state
}