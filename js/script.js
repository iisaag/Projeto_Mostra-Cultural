const playlist = [
    { title: "Música 1", file: "../audios/foi-o-p-diddy.mp3" },
    { title: "Música 2", file: "../audios/me-chama-de-lorde.mp3" },
    { title: "Música 3", file: "../audios/sad-meow-song.mp3" }
];

let currentTrack = 0; // Música atual
const audioPlayer = document.getElementById("audio-player");
const musicTitle = document.getElementById("music-title");

// Função para carregar e tocar a música
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    musicTitle.textContent = track.title; // Muda o título
    audioPlayer.src = track.file;         // Define o arquivo de áudio
    audioPlayer.play();                   // Toca a música
}

// Eventos para navegar entre as músicas
document.getElementById("next").addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length; // Avança para a próxima
    loadTrack(currentTrack);
});

document.getElementById("prev").addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length; // Volta para a anterior
    loadTrack(currentTrack);
});

// Evento para tocar a próxima música quando a atual termina
audioPlayer.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length; // Avança para a próxima
    loadTrack(currentTrack);
});

// Carrega a primeira música ao carregar a página
window.onload = () => loadTrack(currentTrack);
