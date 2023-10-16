const pianoKeys = document.querySelectorAll(".piano-keys .key")
volumeSlider = document.querySelector(".volume-slider input")
keysCheckbox = document.querySelector(".keys-checkbox input")


let allKeys = [];
let audio = new Audio(`assets/a.wav`) // by default , audio src is a.wav

const playTune = (key) => {
    audio.src = `./assets/${key}.wav`; //passing audio src based on key pressed
    audio.play()

    const clickedKey = document.querySelector(`[data-key= "${key}]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    // callin playtune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const handleVolume= (e)=>{
    audio.volume = e.target.value
}

const showHideKeys= (e)=>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}

const pressedKey = (e) => {
   if(allKeys.includes(e.key)) playTune(e.key)
}

keysCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey);