const DirectorDetails = director => {
    return (
        <div className={`director ${director.id}`}>
            <div className="firstName">{director.firstName}</div>
            <div className="lastName">{director.lastName}</div>
            <div className="age">{director.age}</div>
            <button>Edit</button>
        </div>
    );
}

export default DirectorDetails
