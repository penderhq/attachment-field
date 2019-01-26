import random from "lodash/random"

export default ({file, onProgress}) => new Promise((resolve) => {

    const totalTime = random(1000, 3000)
    const steps = 10
    const intervalTime = totalTime / (steps + 1)
    const counterIncrease = 100 / steps

    let progress = 0

    let interval = setInterval(() => {
        progress += counterIncrease
        onProgress(progress)
    }, intervalTime)

    setTimeout(() => {
        clearInterval(interval)
        resolve()
    }, totalTime)
})