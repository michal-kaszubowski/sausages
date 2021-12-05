import SelectDirector from "./SelectDirector";

const MovieDetails = movie => {
    return (
        <div className={`movie ${movie.id}`}>
            <div className="title">{movie.title}</div>
            <div className="year">{movie.year}</div>
            <div className="director">{movie.director}</div>
            <SelectDirector id={movie.id}/>
            <button>Edit</button>
        </div>
    );
}

export default MovieDetails
