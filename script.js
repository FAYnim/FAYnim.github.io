document.addEventListener('DOMContentLoaded', () => {
  // --- Intersection Observer untuk animasi fade-in section ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.5 } // Trigger saat 50% elemen terlihat
  );

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

  // --- Mengatur posisi, ukuran, dan durasi acak untuk bentuk latar belakang ---
  const shapes = document.querySelectorAll('.background-shapes .shape');
  shapes.forEach(shape => {
    // Ukuran acak antara 20px dan 120px
    const size = Math.random() * 100 + 20;
    // Posisi horizontal acak antara 0% dan 90% dari lebar layar
    const leftPosition = Math.random() * 90; 
    // Durasi animasi acak antara 20 dan 40 detik
    const animationDuration = Math.random() * 20 + 20; 

    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.left = `${leftPosition}vw`;
    shape.style.animationDuration = `${animationDuration}s`;
  });

	// --- TOGGLE SIDEBAR MOBILE ---
	const menuToggle = document.getElementById('menu-toggle');
	const nav = document.querySelector('header nav');

	if (menuToggle && nav) {
	  menuToggle.addEventListener('click', () => {
	    nav.classList.toggle('active');
	    
	    // Opsional: Ubah ikon menu menjadi X ketika aktif
	    if (nav.classList.contains('active')) {
	      menuToggle.innerHTML = '✕';
	    } else {
	      menuToggle.innerHTML = '&#9776;';
	    }
	  });
	  
	  // Tutup menu ketika link di klik (opsional, untuk UX yang lebih baik)
	  const navLinks = document.querySelectorAll('header nav a');
	  navLinks.forEach(link => {
	    link.addEventListener('click', () => {
	      nav.classList.remove('active');
	      menuToggle.innerHTML = '&#9776;';
	    });
	  });
	  
	  // Tutup menu ketika mengklik di luar area navigasi (opsional)
	  document.addEventListener('click', (e) => {
	    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
	      nav.classList.remove('active');
	      menuToggle.innerHTML = '&#9776;';
	    }
	  });
  }
  
  // --- EFEK MENGETIK UNTUK PROFESI ---
  const professionEl = document.getElementById('profession');
  const professions = ["Fullstack Developer", "IoT Engineer", "Content Creator", "Tech Enthusiast"];
  let professionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentProfession = professions[professionIndex];
    let displayText = '';

    if (isDeleting) {
      // Hapus karakter
      displayText = currentProfession.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Tambah karakter
      displayText = currentProfession.substring(0, charIndex + 1);
      charIndex++;
    }

    professionEl.textContent = displayText;

    if (!isDeleting && charIndex === currentProfession.length) {
      // Selesai mengetik, tunggu, lalu mulai hapus
      setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Selesai menghapus, pindah ke profesi berikutnya
      isDeleting = false;
      professionIndex = (professionIndex + 1) % professions.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
  }

  // Mulai efek mengetik setelah halaman dimuat
  if(professionEl) {
    typeWriter();
  }

  // --- LOGIKA POP-UP ---
  const popupOverlay = document.getElementById('popup-overlay');
  const popupClose = document.getElementById('popup-close');
  const popupBody = document.getElementById('popup-body');

  // Fungsi untuk menampilkan pop-up
  window.showPopup = (content) => {
    popupBody.innerHTML = content;
    popupOverlay.classList.remove('hidden');
  }

  // Fungsi untuk menyembunyikan pop-up
  const hidePopup = () => {
    popupOverlay.classList.add('hidden');
    popupBody.innerHTML = ''; // Kosongkan konten saat ditutup
  }

  // Event listener untuk tombol tutup
  popupClose.addEventListener('click', hidePopup);

  // Event listener untuk menutup saat klik di luar area konten
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      hidePopup();
    }
  });
});

const terhubung = () => {
  window.open('https://www.linkedin.com/in/faris-ay', '_blank');
};

const demo = (demo_url) => {
  window.open(demo_url, '_blank');
}

// === Fitur Multi Language ===
document.addEventListener('DOMContentLoaded', function() {
    const langContainer = document.querySelector('.lang-switch-container');
    const langButtons = document.querySelectorAll('.btn-switch-lang');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isEnglish = this.textContent === 'EN';
            
            // Hapus kelas active dari semua tombol
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambahkan kelas active ke tombol yang diklik
            this.classList.add('active');
            
            // Toggle kelas container untuk animasi geser
            if (isEnglish) {
                langContainer.classList.add('english');
            } else {
                langContainer.classList.remove('english');
            }
            
            switchLanguage(isEnglish ? 'en' : 'id');
        });
    });
});

function switchLanguage(lang) {
    console.log('Mengganti ke bahasa:', lang);
    
    // Contoh bagaimana Anda mungkin mengimplementasikan pergantian bahasa:
    // if (lang === 'en') {
    //     // Ubah semua teks ke bahasa Inggris
    // } else {
    //     // Ubah semua teks ke bahasa Indonesia
    // }
}
