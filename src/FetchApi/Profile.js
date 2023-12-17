
const  Profile = (props) => 
(<div><h2>{props.user.name}</h2>
<div>{props.user.age}</div>
<div><img src={props.user.image}/></div>
</div>)




export default Profile;
