import * as React from 'react'
import {memberAPI} from '../../api/member'
import { MemberEntity } from '../../model';
import { members } from '../../api/member/mockData';
interface State {
    members: MemberEntity[]
}
interface Props {

}
export class MembersPage extends React.Component<Props,State>{
    constructor (props){
        super(props)
        this.state = {
            members:[] 
        }
    }
    public componentDidMount(){
        memberAPI.fetchMembers().then((members)=>this.setState({
            members
        }))
    }
    public render(){
        return (
            <div>
                <table className="table">
                    <thead></thead>
                    <thead>
                        {
                            this.state.members.map(MemberRow)
                        }
                    </thead>
                    <thead></thead>
                </table>
            </div>
        )
    }
}
const MemberRow = (member: MemberEntity)=>{
    return (
        <tr key={member.id}>
            <td>
                <img src={member.avatar_url} alt="" className="avatar"/>
            </td>
            <td>
                {member.id}
            </td>
            <td>
                {member.login}
            </td>
        </tr>
    )
}