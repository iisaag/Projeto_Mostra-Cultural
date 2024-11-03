const playlist = [
    { title: "Candeia", file: "../audios/spotifydown.com - CANDEIA.mp3", artist: "Black Pantera", cover: "../img/capa-b.jpg" },
    { title: "B", file: "../audios/me-chama-de-lorde.mp3", artist: "Artista B", cover: "../img/Capa-b.jpg" },
    { title: "C", file: "../audios/sad-meow-song.mp3", artist: "Artista C", cover: "../images/capa-c.jpg" }
];

let currentTrack = 0;
const audioPlayer = document.getElementById("audio-player");
const musicTitle = document.getElementById("music-title");
const musicArtist = document.getElementById("music-artist");
const musicCover = document.getElementById("music-cover");
const playPauseButton = document.getElementById("playPause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressBarContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");

// Função para carregar e tocar a música
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    musicTitle.textContent = track.title;
    musicArtist.textContent = track.artist;
    musicCover.src = track.cover;
    audioPlayer.src = track.file;
    audioPlayer.play();
    playPauseButton.innerHTML = "<i class='bx bx-pause'></i>"; // Atualiza para ícone de pausa
}

// Atualiza a barra de progresso conforme a música toca
audioPlayer.addEventListener("timeupdate", () => {
    if (audioPlayer.duration) { // Verifica se a duração está disponível
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
});

// Permite que o usuário clique na barra de progresso para pular para um ponto específico
progressBarContainer.addEventListener("click", (e) => {
    const clickX = e.offsetX;
    const width = progressBarContainer.clientWidth;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
});

// Evento para tocar a próxima música quando a atual termina
audioPlayer.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
});

// Eventos para navegar entre as músicas
nextButton.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
});

prevButton.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
});

// Alterna entre play e pause no botão playPause
playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = "<i class='bx bx-pause'></i>"; // Atualiza para ícone de pausa
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = "<i class='bx bx-play'></i>"; // Atualiza para ícone de play
    }
});

// Carrega a primeira música ao carregar a página
window.onload = () => loadTrack(currentTrack);

const volumeButton = document.getElementById("volume-button");
const volumeControl = document.getElementById("volume-control");
const volumeSlider = document.getElementById("volume-slider");

// Define o volume inicial do player com base no valor do slider
audioPlayer.volume = volumeSlider.value;

// Alterna a visibilidade do controle de volume quando o botão é clicado
volumeButton.addEventListener("click", () => {
    volumeControl.classList.toggle("show"); // Alterna a classe 'show'
});

// Atualiza o volume conforme o usuário move o slider e ajusta a cor do preenchimento
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
    volumeSlider.style.setProperty("--volume-level", `${volumeSlider.value * 100}%`);
});
