const JoinRoomForm = () => {
    return (
    <form className="form col-md-12 mt-5">
        <div className="form-group">
            <input 
                type="text" 
                placeholder="Enter your name"   
                className="form-control my-2"
            />
        </div>
        <div className="form-group">
                <input 
                    type="text" 
                    className="form-control my-2"
                    placeholder="Enter room code" 
                />
        </div>
        <button type="submit" className="form-control mt-4 btn btn-primary btn-block">
            Join Room
        </button>
    </form>
)
}

export default JoinRoomForm