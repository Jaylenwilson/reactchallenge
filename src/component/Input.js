import View from "./View";



const Input = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.name.length == 0 || props.age.length == 0 || props.hobbies.length == 0) {
            props.results = 0;
        }
    }

    return (
        <div className='main'>
            <div className='mainDiv'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={e => props.setName(e.target.value)} type='text' id='name' placeholder='Enter a name' value={props.name}></input>
                    <input onChange={e => props.setAge(e.target.value)} type='number' id='age' placeholder='Enter a age' value={props.age}></input>
                    <input onChange={e => props.setHobbies(e.target.value)} type='text' id='hobbies' placeholder='Enter your hobbies' value={props.hobbies}></input>
                    <br />
                    <button onSubmit={handleSubmit} className='submit'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default Input