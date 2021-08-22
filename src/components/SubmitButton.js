// import Button from './Button'
import "../styles/Button.css"

function SubmitButton({onChildClick}) {

    return (
        <button 
        className="Button"
        onClick={onChildClick}
        >Submit</button>
    )
}

export default SubmitButton