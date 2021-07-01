const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//loops over sounds array and creates a button element with the class of btn
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    //inner text of button has name of sound in button from sounds array
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        //built in function of .play in html5 api
        document.getElementById(sound).play()
    })
    //this appends the btn to the buttons div to be displayed on page
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        //no stop but there is a pause feature
        song.pause()
        //resets song to zero, built in function with audio
        song.currentTime = 0;
    })
}