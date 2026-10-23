// ==========================================
// 1. SCRIPT UNTUK HALAMAN BERANDA
// ==========================================
const textElement = document.getElementById('animatedText');

// Pengecekan agar script ini hanya berjalan jika berada di halaman Beranda
if (textElement) {
    // Daftar kalimat yang akan muncul bergantian
    const texts = [
        "Welcome", 
        "Hai Sayang", 
        "Klik Untuk", 
        "Memulai ❤️"
    ];
    
    let currentIndex = 0;

    // Fungsi untuk mengganti teks setiap 3 detik
    setInterval(() => {
        // Memudarkan teks (Fade Out) dan mengecilkan ukuran
        textElement.style.opacity = 0;
        textElement.style.transform = "rotate(-5deg) scale(0.9)";

        // Menunggu 0.5 detik saat teks hilang, lalu mengganti teksnya
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.innerText = texts[currentIndex];
            
            // Memunculkan kembali teks (Fade In)
            textElement.style.opacity = 1;
            textElement.style.transform = "rotate(-5deg) scale(1)";
        }, 500); 
        
    }, 3000);
}


// ==========================================
// 2. SCRIPT UNTUK HALAMAN SURAT
// ==========================================
const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const activeLyric = document.getElementById('active-lyric');

// Pengecekan agar fungsi ini hanya berjalan di halaman Surat (saat tombol buka pesan ada)
if (openBtn && overlay && mainContent && bgMusic) {
    
    // Event listener saat tombol "Buka Pesannya" diklik
    openBtn.addEventListener('click', function() {
        
        // Fitur layar penuh (Fullscreen) otomatis
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log("Fullscreen gagal: ", err);
            });
        }
        
        // Memutar musik background
        bgMusic.play();
        
        // Menyembunyikan layar pembuka (overlay)
        overlay.style.display = 'none';
        
        // Menampilkan konten utama dengan menghapus class 'hidden'
        mainContent.classList.remove('hidden');
    });
}

// --- SINKRONISASI LIRIK BERJALAN SESUAI MUSIK ---
if (activeLyric && bgMusic) {
    
    // Data lirik lagu beserta waktu detiknya
    const lyricsData = [
        { time: 0.0, text: "🎵 Memutar musik... 🎵" },
        { time: 16.0, text: "Perlahan akan, ku ajarkan cara" },
        { time: 27.0, text: "Menamam menuai baik buruk di dunia" },
        { time: 42.0, text: "Kau warnai tanganmu yang mati" },
        { time: 49.0, text: "Biar kau tahu dunia tak lagi menyakiti" },
        { time: 59.0, text: "Dan kubisikkan asal kau tahu bagaimana" },
        { time: 66.0, text: "Rasanya bahagia sepenuhnya sampai" },
        { time: 73.0, text: "Ku merasa lega, kau merasa lega" },
        { time: 80.0, text: "Ku sampai di sana" },
        { time: 87.0, text: "Perlahan telah kau ajarkan cara" },
        { time: 100.0, text: "menerima rasa baik buruk yang ku punya" },
        { time: 114.0, text: "Kau panggil jahat yang menyelimuti" },
        { time: 122.0, text: "Sampai ku tahu dunia tak lagi menyakiti" },
        { time: 131.0, text: "Dan kubisikkan asal kau tahu bagaimana" },
        { time: 139.0, text: "Rasanya bahagia sepenuhnya sampai" },
        { time: 145.0, text: "Ku merasa lega, kau merasa lega" },
        { time: 152.0, text: "Ku sampai di sana" },
        { time: 160.0, text: "Perang telah usai perang telah usai" },
        { time: 173.0, text: "Aku bisa pulang" },
        { time: 179.0, text: "Ku berikan panah" },
        { time: 183.0, text: "Dan berteriak menang" },
        { time: 190.0, text: "Dan kubisikan asal kau tahu bagaimana" },
        { time: 197.0, text: "Rasanya bahagia sepenuhnya sampai" },
        { time: 203.0, text: "Ku merasa lega kau merasa lega" },
        { time: 210.0, text: "Ku sampai di sana. Kau sampai di sana" },
        { time: 217.0, text: "Ku sampai di sana. Kau sampai di sana" },
        { time: 220.0, text: "🎵................🎵" },
    ];

    // Memantau perubahan waktu pada pemutaran lagu
    bgMusic.addEventListener('timeupdate', function() {
        const currentTime = bgMusic.currentTime;
        let currentText = "🎵 Memutar musik... 🎵";
        
        // Mencari lirik yang sesuai dengan detik lagu saat ini
        for (let i = 0; i < lyricsData.length; i++) {
            if (currentTime >= lyricsData[i].time) {
                currentText = lyricsData[i].text;
            }
        }
        
        // Memberikan efek transisi halus (fade) saat teks berganti
        if (activeLyric.innerText !== currentText) {
            activeLyric.style.opacity = 0;
            setTimeout(() => {
                activeLyric.innerText = currentText;
                activeLyric.style.opacity = 1;
            }, 300);
        }
    });
}