const Header = ({username}) =>{
    const name = username ? username : 'User';
    return(
        <>
            <h1>Hello {name}</h1>
        </>
    )
}

export default Header;