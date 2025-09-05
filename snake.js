const wrapper = document.querySelector(".wrapper")
const row = 10
const column = 15
const total = row * column
let apple_index
let snake_index = 0
let snake_body = [1]

const btn_up = document.getElementById("btn_up")
const btn_down = document.getElementById("btn_down")
const btn_right = document.getElementById("btn_right")
const btn_left = document.getElementById("btn_left")

for (let i = 0; i < total; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.id = `${i}`
    wrapper.append(cell)
}


apple = () => {
    free = []
    for (let i = 0; i < total; i++) {
        if (!snake_body.includes(i)) {
            free.push(i)
        }
    }
    randomfreeindex = Math.floor(Math.random() * free.length)
    apple_index = free[randomfreeindex]
    const cell = document.getElementById(`${apple_index}`)
    cell.classList.add("apple")


}


apple()

snake = () => {
    snake_index = Math.floor(Math.random() * total)
    snake_body = [snake_index]
    if (snake_index == apple_index) {
        document.getElementById(`${apple_index}`).classList.remove("apple")
    }

    const cell = document.getElementById(`${snake_index}`)
    cell.classList.add("snake")
}

snake()

snake_eat_apple = (New_Snake_Index) => {
    if (snake_body.includes(New_Snake_Index)) {
        alert("Game over!")
        snake_del = document.querySelectorAll('.snake')
        snake_del.forEach(snake => snake.classList.remove('snake'));
        apple_del = document.querySelectorAll('.apple')
        apple_del.forEach(apple => apple.classList.remove('apple'));
        snake()
        apple();
        return

    }
    if (New_Snake_Index === apple_index) {
        document.getElementById(`${apple_index}`).classList.remove("apple")
        snake_body.push(New_Snake_Index)
        document.getElementById(`${New_Snake_Index}`).classList.add("snake")
        apple()
    }
    else {
        const total_snake_body = snake_body.shift()
        document.getElementById(`${total_snake_body}`).classList.remove("snake")
        snake_body.push(New_Snake_Index)
    }

    document.getElementById(`${New_Snake_Index}`).classList.add("snake")

    snake_index = New_Snake_Index;


}


btn_up.onclick = () => {
    const New_Snake_Index = snake_index - column
    if (New_Snake_Index <= total) {
        snake_eat_apple(New_Snake_Index)
    }

}



btn_down.onclick = () => {
    const New_Snake_Index = snake_index + column
    if (New_Snake_Index > 0) {
        snake_eat_apple(New_Snake_Index)
    }
}



btn_right.onclick = () => {
    const New_Snake_Index = snake_index + 1
    if (New_Snake_Index >= 0) {
        snake_eat_apple(New_Snake_Index)
    }
}

btn_left.onclick = () => {
    const New_Snake_Index = snake_index - 1
    if (New_Snake_Index >= 0) {
        snake_eat_apple(New_Snake_Index)
    }

}





