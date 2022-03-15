
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMember } from '../actions/member'

function MemberList() {
    const membersReact = useSelector(state => state.membersReact)
    const membersJava = useSelector(state => state.membersJava)
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()

    const handleEdit = (member, index) => {
        dispatch(setMember(member))
    }
    return (
        <div>
            <h2>member react</h2>
            <ul>
                {membersReact.map((member, index) => (
                    <li key={index}>{member.username} - {member.age} <button onClick={() => handleEdit(member, index)}>Edit</button></li>
                ))}
            </ul>
            <h2>member java</h2>
            <ul>
                {membersJava.map((member, index) => (
                    <li key={index}>{member.username} - {member.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default MemberList