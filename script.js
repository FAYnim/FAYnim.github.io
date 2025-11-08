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
let langData = null;

async function loadLanguageData() {
    try {
        const response = await fetch('lang.json');
        if (!response.ok) {
            throw new Error('Gagal memuat file lang.json');
        }
        langData = await response.json();
        console.log('Data bahasa berhasil dimuat:', langData);
    } catch (error) {
        console.error('Error memuat data bahasa:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Muat data bahasa terlebih dahulu
    loadLanguageData();
    
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
            
            switchLanguage(isEnglish ? 'EN' : 'ID');
        });
    });
});

function switchLanguage(lang) {
    console.log('Mengganti ke bahasa:', lang);
    
    if (!langData) {
        console.error('Data bahasa belum dimuat');
        return;
    }
    
    const currentLangData = langData[lang];
    if (!currentLangData) {
        console.error('Data untuk bahasa', lang, 'tidak ditemukan');
        return;
    }
    
    // Ganti teks berdasarkan data bahasa
    const elementsToTranslate = {
        'tagline': currentLangData['tagline'],
        'welcome-msg': currentLangData['welcome-msg'],
        'about-me-title': currentLangData['about-me-title'],
        'skills-title': currentLangData['skills-title'],
        'education-title': currentLangData['education-title'],
        'certificates-title': currentLangData['certificates-title'],
        'project-title': currentLangData['project-title'],
        'contact-title': currentLangData['contact-title'],

        'about-me-text': currentLangData['about-me-text'],

        'btn-download-cv': "<i class='fa-solid fa-file-arrow-down'></i>" + currentLangData['btn-download-cv'],
        'btn-linkedin': "<i class='fa-brands fa-linkedin'></i>" + currentLangData['btn-linkedin'],

        'nav-about-me': "<i class='fa-solid fa-user'></i>" + currentLangData['nav-about-me'],
        'nav-skills': "<i class='fa-solid fa-bolt-lightning'></i>" + currentLangData['nav-skills'],
        'nav-certificates': "<i class='fa-solid fa-award'></i>" + currentLangData['nav-certificates'],
        'nav-project': "<i class='fa-solid fa-bullseye'></i>" + currentLangData['nav-project'],
        'nav-contact': "<i class='fa-solid fa-phone'></i>" + currentLangData['nav-contact'],

        'about-name': currentLangData['about-name'],
        'about-origin': currentLangData['about-origin'],
        'about-experience': currentLangData['about-experience'],
        'about-projects-completed': currentLangData['about-projects-completed'],
        'about-experience-years': currentLangData['about-experience-years'],
        'about-projects-count': currentLangData['about-projects-count'],

        'education-year-1': currentLangData['education-year-1'],
        'education-year-2': currentLangData['education-year-2'],
        'education-year-3': currentLangData['education-year-3'],

        'coming-soon': currentLangData['coming-soon'],
        'coming-soon-2': currentLangData['coming-soon'],
        'coming-soon-3': currentLangData['coming-soon'],

        'project-website-cv': currentLangData['project-website-cv'],
        'project-portfolio-desc': currentLangData['project-portfolio-desc'],
        'btn-demo': currentLangData['btn-demo'],

        'contact-name-label': currentLangData['contact-name-label'],
        'contact-email-label': currentLangData['contact-email-label'],
        'contact-message-label': currentLangData['contact-message-label'],

        'footer-made-with-love': currentLangData['footer-made-with-love'],
        'footer-copyright': currentLangData['footer-copyright']
    };
    
    // Update elemen-elemen dengan teks baru
    Object.keys(elementsToTranslate).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            // Gunakan innerHTML untuk elemen yang mengandung HTML (icon)
            if (elementId.includes('btn-') || elementId.includes('nav-')) {
                element.innerHTML = elementsToTranslate[elementId];
            } else {
                element.textContent = elementsToTranslate[elementId];
            }
        }
    });

    // Update placeholders
    const placeholderElements = {
        'inp-name': currentLangData['contact-name-placeholder'],
        'inp-email': currentLangData['contact-email-placeholder'],
        'inp-message': currentLangData['contact-message-placeholder']
    };

    Object.keys(placeholderElements).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.placeholder = placeholderElements[elementId];
        }
    });

    // Update submit button value
    const submitBtn = document.getElementById('btn-send');
    if (submitBtn) {
        submitBtn.value = currentLangData['btn-send'];
    }
}
