let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    count++;
    countEl.innerText = count
    console.log(count)
}
