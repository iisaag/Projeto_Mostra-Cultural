const playlist = [
    { 
        title: "CANDEIA", 
        file: "../audios/spotifydown.com - CANDEIA (1).mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "PERPÉTUO", 
        file: "../audios/spotifydown.com - PERPÉTUO.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "Marighella", 
        file: "../audios/spotifydown.com - Marighella.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Black Book Club fala sobre empoderamento e cultura."
    },
    { 
        title: "Racistas", 
        file: "../audios/spotifydown.com - Racistas.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Uma música explosiva com temas de revolução."
    },
    { 
        title: "Punho de Mahin", 
        file: "../audios/spotifydown.com - Punho de Mahin.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Letra baseada em passagens bíblicas."
    },
    { 
        title: "River", 
        file: "../audios/spotifydown.com - River.mp3", 
        artist: "Leon Bridges", 
        cover: "../img/capas/Capa-leonbridges.jpg", 
        sobre: "Fala sobre a realidade das periferias."
    },
    { 
        title: "O Rap É Meu Divã ", 
        file: "../audios/spotifydown.com - O Rap É Meu Divã.mp3", 
        artist: "Meire D'Origem, Carlos Eduardo Galvão", 
        cover: "../img/capas/Capa-meire.jpg", 
        sobre: "Uma homenagem às origens africanas."
    },
    { 
        title: "Direitos Violados", 
        file: "../audios/spotifydown.com - Direitos Violados.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "História de um detento narrada em versos."
    },
    { 
        title: "Navio Negreiro", 
        file: "../audios/spotifydown.com - Navio Negreiro.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Sobre questões de direitos humanos."
    },
    { 
        title: "Protagonista", 
        file: "../audios/spotifydown.com - Protagonista.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Uma música forte sobre poder e influência."
    },
    { 
        title: "Estupidez", 
        file: "../audios/spotifydown.com - Estupidez.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Reflexão sobre atos de violência e intolerância."
    },
    { 
        title: "Xingú", 
        file: "../audios/spotifydown.com - Xingú.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Mensagem de paz e esperança."
    },
    { 
        title: "PROVÉRBIOS", 
        file: "../audios/spotifydown.com - PROVÉRBIOS.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Uma música profunda e introspectiva."
    },
    { 
        title: "BOOM!", 
        file: "../audios/spotifydown.com - BOOM!.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Sobre o orgulho da identidade e herança."
    },
    { 
        title: "TRADUÇÃO", 
        file: "../audios/spotifydown.com - TRADUÇÃO.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Homenagem ao ativista brasileiro Marighella."
    },
    { 
        title: "PROMISSÓRIA", 
        file: "../audios/spotifydown.com - PROMISSÓRIA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Uma música que incentiva a ação."
    },
    { 
        title: "BLACK BOOK CLUB", 
        file: "../audios/spotifydown.com - BLACK BOOK CLUB.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Sobre amor e proteção."
    },
    { 
        title: "SEM ANISTIA", 
        file: "../audios/spotifydown.com - SEM ANISTIA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Mensagem de fé e resiliência."
    },
    { 
        title: "MAHORAGA", 
        file: "../audios/spotifydown.com - MAORAGA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Sobre a história e luta dos negros."
    },
    { 
        title: "METE MARCHA", 
        file: "../audios/spotifydown.com - METE MARCHA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Explora o drama vivido nas periferias."
    },
    { 
        title: "A HORDA", 
        file: "../audios/spotifydown.com - A HORDA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "Rap como forma de expressão e terapia."
    },
    { 
        title: "Diário de um Detento", 
        file: "../audios/spotifydown.com - Diário de um Detento.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Sobre as dificuldades e alegrias da periferia."
    },
    { 
        title: "Periferia É Periferia", 
        file: "../audios/spotifydown.com - Periferia É Periferia.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Letra sobre compromissos e dívidas."
    },
    { 
        title: "Capítulo 4, Versículo 3", 
        file: "../audios/spotifydown.com - Capítulo 4, Versículo 3.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Uma mensagem sobre ser o protagonista da própria história."
    },
    { 
        title: "Negro Drama", 
        file: "../audios/spotifydown.com - Negro Drama.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Canção inspirada em provérbios populares."
    },
    { 
        title: "Na Fé Firmão", 
        file: "../audios/spotifydown.com - Na Fé Firmão.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Inspirada na resistência negra."
    },
    { 
        title: "Jesus Chorou", 
        file: "../audios/spotifydown.com - Jesus Chorou.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Denuncia o racismo na sociedade."
    },
    { 
        title: "Trutas e Quebradas", 
        file: "../audios/spotifydown.com - Trutas e Quebradas.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Canção introspectiva sobre erros e redenção."
    },
    { 
        title: "Da Ponte pra Cá", 
        file: "../audios/spotifydown.com - Da Ponte pra Cá.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Protesto contra injustiças."
    },
    { 
        title: "Meu Talismã", 
        file: "../audios/spotifydown.com - Meu Talismã.mp3", 
        artist: "IZA", 
        cover: "../img/capas/Capa-iza.jpg", 
        sobre: "Sobre entendimento e comunicação."
    },
    { 
        title: "É o Poder", 
        file: "../audios/spotifydown.com - É o Poder.mp3", 
        artist: "Karol Conká", 
        cover: "../img/capas/Capa-karol.jpg", 
        sobre: "Explora as realidades das ruas."
    },
    { 
        title: "Dandalunda", 
        file: "../audios/spotifydown.com - Dandalunda.mp3", 
        artist: "Margareth Menezes", 
        cover: "../img/capas/Capa-margareth.jpg", 
        sobre: "Homenagem à cultura indígena do Xingu."
    }, 
    { 
        title: "Formula Mágica da Paz - Ao Vivo", 
        file: "../audios/spotifydown.com - Formula Mágica da Paz - Ao Vivo.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais3.jpg", 
        sobre: "Homenagem à cultura indígena do Xingu."
    }
];


let currentTrack = 0;
const audioPlayer = document.getElementById("audio-player");
const musicTitle = document.getElementById("music-title");
const musicArtist = document.getElementById("music-artist");
const musicCover = document.getElementById("music-cover");
const contSobre = document.getElementById("cont-sobre");
const playPauseButton = document.getElementById("playPause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressBarContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");

function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    musicTitle.textContent = track.title;
    musicArtist.textContent = track.artist;
    musicCover.src = track.cover;
    audioPlayer.src = track.file;
    contSobre.textContent = track.sobre; // Atualiza o texto "Sobre a banda"
    
    // Define a capa da música como fundo da página
    document.body.style.transition = "background-image 0.5s ease-in-out";  // Suaviza a transição de fundo
    document.body.style.backgroundImage = `url(${track.cover})`; // Altera o fundo
    document.body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem
    document.body.style.backgroundPosition = "center"; // Centraliza a imagem
    document.body.style.backgroundRepeat = "no-repeat"; // Impede a repetição da imagem

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

document.addEventListener("DOMContentLoaded", () => {
    loadTrack(currentTrack);
});