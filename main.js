document.addEventListener('DOMContentLoeaded', () => {
    const square = document.querySelectorAll ('.grid Div')
    const scoreDisplay = document.querySelector ('.span')
    const startBtn = document.querySelector ('start')

    const width = 10
    let currentIndex = 0   // so firs div in our grid
    let appleIndex = 0
    let currentSnake = [2, 1, 0]

    let direction: 1
    let score: 0
    let speed: 1.0
    let intervalTime = 0
    let interval = 0

    // start and retart
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
    //randomapple
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
    }

    // outcomes of the snake
    function moveOutcomes() {
    
    // snake hitting self
    if {
        (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
        (currentSnake[0] % width === width -1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1)
        (currentSnake[0] - width < 0 && direction === -width)

    }

    // assign functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snakes')

        if(e.keycodes === 39) {
            direction = 1
        } else if (e.keycode === 38) {
            direction = -width
        } else if (e.keycode === 37) {
            direction -1
        } else if (e.keycode === 40) {
            direction = +width
        }
    }

    document.addEventListener('keyup', control)

})
