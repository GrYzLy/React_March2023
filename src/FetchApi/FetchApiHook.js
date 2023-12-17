import React, {useState, useEffect} from 'react'
import Profile from './Profile'

const FetchApiHook = props => {

const [data, setData] = useState([])


useEffect(() => {
    async function fetchData() {
        const response = await fetch('http://localhost:39635/Profile')
        const data = await response.json()
        setData(data)
    }
    fetchData()
}, [] )

return (
        <div>
            <h1>Profile</h1>
            
            {data && data.map((profile) => <Profile user={profile} />)}
            
        </div>
    )
}


export default FetchApiHook;
