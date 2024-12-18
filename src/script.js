let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let restart = document.querySelector(".restart");
let info = document.querySelector(".gameinfo");

let WinningCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [7, 5, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
let currentPlayer = "X"
let x = []
let o = []

boxes.forEach(box => {
    box.addEventListener("click", () => {
        let target = event.target
        if (box.id === target.id) {
            if (target.innerHTML === "") {
                target.innerHTML = currentPlayer
                let move = parseInt(target.id)
                if (currentPlayer === "X") {
                    x.push(move)
                    if (CheckWinner(x)) {
                        alert("X")
                        game.style.display = "none"
                        restart.style.display = "block"
                        info.style.display = "block"
                        info.firstElementChild.innerHTML = `${currentPlayer} be like`
                        return
                    }
                    currentPlayer = "O"

                }
                else {
                    o.push(move)
                    if (CheckWinner(o)) {
                        alert("O")
                        game.style.display = "none"
                        restart.style.display = "block"
                        info.style.display = "block"
                        info.firstElementChild.innerHTML = `${currentPlayer} be like`
                        return
                    }
                    currentPlayer = "X"

                }
                if (x.length + o.length == 9) {
                    alert("it's draw")
                    game.style.display = "none"
                    restart.style.display = "block"
                }

            }
        }
    })
});

function CheckWinner(moves) {
    return WinningCombination.some(
        combination => combination.every(num => moves.includes(num))
    )
}

restart.addEventListener("click", () => {
    location.reload()
})