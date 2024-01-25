const User = (props) => {
    const { name,location,gmail} = props
    return (
        <div className="userInfo">
            <h2>Name:- {name}</h2>
            <h3>Location - {location}</h3>
            <h4>Gmail:- {gmail}</h4>
        </div>
    )
}

export default User;