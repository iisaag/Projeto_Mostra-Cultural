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
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Racistas", 
        file: "../audios/spotifydown.com - Racistas.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Punho de Mahin", 
        file: "../audios/spotifydown.com - Punho de Mahin.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "River", 
        file: "../audios/spotifydown.com - River.mp3", 
        artist: "Leon Bridges", 
        cover: "../img/capas/Capa-leonbridges.jpg", 
        sobre: "Leon Bridges é um cantor e compositor americano que mistura soul, R&B e gospel, conhecido pelo estilo retrô inspirado nos anos 60. Ele ganhou fama com o álbum Coming Home (2015) e se destaca pela voz suave e autenticidade."
    },
    { 
        title: "O Rap É Meu Divã ", 
        file: "../audios/spotifydown.com - O Rap É Meu Divã.mp3", 
        artist: "Meire D'Origem, Carlos Eduardo Galvão", 
        cover: "../img/capas/Capa-meire.jpg", 
        sobre: "Meire D'Origem é uma MC e ativista do rap nacional do Vale do Paraíba, SP. Além da música, ela promove oficinas de artes e poesia em escolas e penitenciárias, realiza palestras sobre Hip Hop e organiza encontros para fortalecer e empoderar mulheres em sua comunidade."
    },
    { 
        title: "Direitos Violados", 
        file: "../audios/spotifydown.com - Direitos Violados.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Navio Negreiro", 
        file: "../audios/spotifydown.com - Navio Negreiro.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Protagonista", 
        file: "../audios/spotifydown.com - Protagonista.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Estupidez", 
        file: "../audios/spotifydown.com - Estupidez.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "Xingú", 
        file: "../audios/spotifydown.com - Xingú.mp3", 
        artist: "Punho de Mahin", 
        cover: "../img/capas/Capa-mahin.jpg", 
        sobre: "Formado por integrantes negros e periféricos, o grupo quer resgatar as histórias de brasileiros como Carlos Marighella e Luiza Mahin por meio da música. No Próxima Parada de hoje, nós trocamos ideia com a Natália e também com o baterista da banda, Paulo Tertuliano, que é do Morro do Macaco, em Cotia. Os dois falam dos trabalhos do grupo e da luta pela diversidade racial no cenário musical."
    },
    { 
        title: "PROVÉRBIOS", 
        file: "../audios/spotifydown.com - PROVÉRBIOS.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "BOOM!", 
        file: "../audios/spotifydown.com - BOOM!.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "TRADUÇÃO", 
        file: "../audios/spotifydown.com - TRADUÇÃO.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "PROMISSÓRIA", 
        file: "../audios/spotifydown.com - PROMISSÓRIA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "BLACK BOOK CLUB", 
        file: "../audios/spotifydown.com - BLACK BOOK CLUB.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "SEM ANISTIA", 
        file: "../audios/spotifydown.com - SEM ANISTIA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "MAHORAGA", 
        file: "../audios/spotifydown.com - MAORAGA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "METE MARCHA", 
        file: "../audios/spotifydown.com - METE MARCHA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "A HORDA", 
        file: "../audios/spotifydown.com - A HORDA.mp3", 
        artist: "Black Pantera", 
        cover: "../img/capas/Capa-b.jpg", 
        sobre: "A banda foi formada em abril de 2014 na cidade de Uberaba, pelos irmãos Charles Gama (guitarra, vocal, letras) e Chaene da Gama (baixo) juntamente ao baterista Rodrigo 'Pancho' Augusto. Todos são negros e a banda aborda temas como política, racismo e discriminação em geral em suas letras. O nome da banda é uma homenagem aos Panteras Negras."
    },
    { 
        title: "Diário de um Detento", 
        file: "../audios/spotifydown.com - Diário de um Detento.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Periferia É Periferia", 
        file: "../audios/spotifydown.com - Periferia É Periferia.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Capítulo 4, Versículo 3", 
        file: "../audios/spotifydown.com - Capítulo 4, Versículo 3.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais1.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Negro Drama", 
        file: "../audios/spotifydown.com - Negro Drama.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Na Fé Firmão", 
        file: "../audios/spotifydown.com - Na Fé Firmão.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Jesus Chorou", 
        file: "../audios/spotifydown.com - Jesus Chorou.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Trutas e Quebradas", 
        file: "../audios/spotifydown.com - Trutas e Quebradas.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Da Ponte pra Cá", 
        file: "../audios/spotifydown.com - Da Ponte pra Cá.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais2.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
    },
    { 
        title: "Meu Talismã", 
        file: "../audios/spotifydown.com - Meu Talismã.mp3", 
        artist: "IZA", 
        cover: "../img/capas/Capa-iza.jpg", 
        sobre: "IZA é uma cantora e compositora do Rio de Janeiro, conhecida por misturar pop, R&B e reggae em suas músicas. Ela ganhou destaque com hits como Pesadão e Dona de Mim, abordando temas de empoderamento e diversidade. Além da música, IZA é reconhecida por sua presença marcante e por defender causas sociais."
    },
    { 
        title: "É o Poder", 
        file: "../audios/spotifydown.com - É o Poder.mp3", 
        artist: "Karol Conká", 
        cover: "../img/capas/Capa-karol.jpg", 
        sobre: "Karol Conká é uma cantora conhecida por suas composições que exaltam a mulher e a cultura negra. As canções refletem suas vivências como uma mulher negra, bissexual, que se tornou mãe solteira aos 19 anos enquanto lutava por um espaço como cantora."
    },
    { 
        title: "Dandalunda", 
        file: "../audios/spotifydown.com - Dandalunda.mp3", 
        artist: "Margareth Menezes", 
        cover: "../img/capas/Capa-margareth.jpg", 
        sobre: "Margareth Menezes da Purificação Costa,nasceu em Salvador no dia 13 de outubro de 1962,é uma cantora, compositora, atriz e política brasileira. Em 2023, tornou-se ministra da Cultura do Brasil no governo Lula. É ganhadora de dois troféus Caymmi, dois troféus Imprensa, quatro troféus Dodô e Osmar, além de ter sido indicada para o GRAMMY Awards e GRAMMY Latino. Contabiliza 21 turnês mundiais, e foi considerada pelo jornal Los Angeles Times, como a 'Aretha Franklin brasileira'."
    }, 
    { 
        title: "Formula Mágica da Paz - Ao Vivo", 
        file: "../audios/spotifydown.com - Formula Mágica da Paz - Ao Vivo.mp3", 
        artist: "Racionais MC's", 
        cover: "../img/capas/Capa-racionais3.jpg", 
        sobre: "Racionais MC's é um grupo brasileiro de rap fundado em 1988 na cidade de São Paulo. É formado por Mano Brown, Ice Blue, Edi Rock e KL Jay. É o maior grupo de rap do Brasil, e está entre os grupos musicais mais influentes do país e da música brasileira."
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