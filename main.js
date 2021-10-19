    // 1. Render songs
    // 2. Scroll top
    // 3. Play / Pause / Seek 
    // 4. CD rotate 
    // 5. Next / Prev 
    // 6. Random 
    // 7. Next / Repeat when ended 
    // 8. Active song 
    // 9. Sroll active song into view 
    // 10. Play song when click


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "CHUNGNN_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playtBtn = $('.btn-toggle-play');
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    settings: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: "Attention - Charlie Puth",
            singer: "Emcee L",
            path: "./assets/music/Attention - Charlie Puth.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "Bad Liar - Imagine Dragons",
            singer: "Emcee L",
            path: "./assets/music/Bad Liar - Imagine Dragons.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "Believer - Imagine Dragons",
            singer: "Emcee L",
            path: "./assets/music/Believer - Imagine Dragons.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "Chandelier - Sia",
            singer: "Emcee L",
            path: "./assets/music/Chandelier - Sia.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "Closer - The Chainsmokers_ Halsey",
            singer: "Emcee L",
            path: "./assets/music/Closer - The Chainsmokers_ Halsey.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        },
        {
            name: "",
            singer: "Emcee L",
            path: "./assets/music/.mp3",
            image: "./assets/img/Chung.jpg"
        }
    ],

    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}');"></div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function() {
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay/ dừng
        const cdThumbAnimate = cdThumb.animate([
            { transform: "rotate(360deg)" }
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD-background
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            if (newCdWidth > 0) {
                cd.style.width = newCdWidth + 'px';
                cd.style.opacity = newCdWidth / cdWidth;
            } 
            else {
                cd.style.width = 0 + 'px';
            }
        }

        // Xử lý khi click play
        playtBtn.onclick = function() {
            if(app.isPlaying) {
                audio.pause();
            } 
            else {
                audio.play();
            }
        }

        // Khi song được chạy
        audio.onplay = function() {
            app.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }

        // Khi song bị dưng lại
        audio.onpause = function() {
            app.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
            }
        }

        // Xử lý khi tua song 
        progress.onchange = function(e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        } 

        // Xử lý khi next song
        nextBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong();
            }
            else {
                app.nextSong();
            }
            audio.play();
            app.render();
            app.scrollToActiveSong();
        }

        // Xử lý khi prev song
        prevBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong();
            }
            else {
                app.prevSong();
            }
            audio.play();
            app.render();
            app.scrollToActiveSong();
        }

        // Xử lý random
        randomBtn.onclick = function(e) {
            app.isRandom = !app.isRandom;
            app.setConfig("isRandom", app.isRandom);
            randomBtn.classList.toggle('active', app.isRandom);
        }

        // Xử lý next song khi audio ended
        audio.onended = function() {
            if(app.isRepeat) {
                audio.play();
            }
            else {
                nextBtn.click();
            }
        }

        // Xử lý lặp lại một bài hát 
        repeatBtn.onclick = function() {
            app.isRepeat = !app.isRepeat;
            app.setConfig("isRepeat", app.isRepeat);
            repeatBtn.classList.toggle('active', app.isRepeat);
        } 

        // Lắng nghe hành vi click vao playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            const songNodeOption = e.target.closest('.option');

            if(songNode || songNodeOption) {
                // Xử lý khi click vào song
                if(songNode) {
                    app.currentIndex = Number(songNode.dataset.index);
                    app.loadCurrentSong();
                    app.render();
                    audio.play();
                }

                // Xử lý khi click vào song option
                if(songNodeOption) {
                    // Để phát triển sau
                }
            }
        }
    },

    loadCurrentSong: function() {
        heading.textContent = this.loadCurrentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(newIndex === this.currentIndex)
         
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },


    scrollToActiveSong: function() {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 100)
    },


    start: function() {
        // Gián cấu hình từ config vào ứng dụng
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Render playlist
        this.render();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
    }
}

app.start();
