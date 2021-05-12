const Buttons = props => {
    

    return (
        <button
        className="shortcutButtons"
        value={props.name}
        onClick={(event) => props.handleSearchShortcut(event)}
        >
            {props.name}
        </button>
    )
}

export default Buttons