const element = document.getElementById("changingSubtitle")

const words = ["first", "only", "best"]
index = 0

element.addEventListener("click", () => {
    index += 1
    console.log(index)
    if (index == (words.length)) {
        index = 0
    }
    element.innerText = words[index]
})