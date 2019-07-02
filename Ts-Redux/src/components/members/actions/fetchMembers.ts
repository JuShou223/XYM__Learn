import { memberAPI} from '../../../api/member'

import {MemberEntity} from '../../../model'

export const fetchMembersAction =()=> (dispatch)=>{
    {
        memberAPI.fetchMembers().then(members=>[
            dispatch(fetchMembersCompleted(members))
        ])
    }
}
const fetchMembersCompleted = (members:MemberEntity[])=>({
    type: 'FETCH_MEMBER_COMPLETED',
    playload: members
})