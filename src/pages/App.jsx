import { useState } from "react"
import Button from "../components/Button"

const App = () => {
    const [show, setShow] = useState(true)
    const onChange = () => {
        setShow(!show)
    }
  return (
    <div>
        <Button onClick={onChange} type = "Primary">{show ? "closed" : "add"}</Button>
        
        {
            show && <div>Vagif teacher is the best!</div>
        }
    </div>
  )
}

export default App