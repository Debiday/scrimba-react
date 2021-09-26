import {useState, useEffect, useRef} from 'react'

function useWordGame() {
    const STARTING_TIME = 5
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    
    function handleChange(event) {
        const {value} = event.target
        setText(value)  
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setText("")
        setTimeRemaining(STARTING_TIME)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
        console.log("wordCount", wordCount)
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame