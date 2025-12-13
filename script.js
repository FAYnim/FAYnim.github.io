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

  // === Pengatur Shape ===
  const shapes = document.querySelectorAll('.background-shapes .shape');
  shapes.forEach(shape => {
    // Pengacak bentuk shape
    const size = Math.random() * 100 + 20;
    const leftPosition = Math.random() * 90; 
    const animationDuration = Math.random() * 20 + 20; 

    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.left = `${leftPosition}vw`;
    shape.style.animationDuration = `${animationDuration}s`;
  });

	// === TOGGLE SIDEBAR MOBILE ===
	const menuToggle = document.getElementById('menu-toggle');
	const nav = document.querySelector('header nav');

	if (menuToggle && nav) {
	  menuToggle.addEventListener('click', () => {
	    nav.classList.toggle('active');
	    
	    if (nav.classList.contains('active')) {
	      menuToggle.innerHTML = '✕';
	    } else {
	      menuToggle.innerHTML = '&#9776;';
	    }
	  });
	  
	  // Tutup menu ketika link di klik
	  const navLinks = document.querySelectorAll('header nav a');
	  navLinks.forEach(link => {
	    link.addEventListener('click', () => {
	      nav.classList.remove('active');
	      menuToggle.innerHTML = '&#9776;';
	    });
	  });
	  
	  // Tutup menu ketika mengklik di luar area
	  document.addEventListener('click', (e) => {
	    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
	      nav.classList.remove('active');
	      menuToggle.innerHTML = '&#9776;';
	    }
	  });
  }
  
  // === Typing Effect ===
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

  // Mulai typing effect
  if(professionEl) {
    typeWriter();
  }

  // === Custom Pop-up ===
  const popupOverlay = document.getElementById('popup-overlay');
  const popupClose = document.getElementById('popup-close');
  const popupBody = document.getElementById('popup-body');


  window.showPopup = (content) => {
    popupBody.innerHTML = content;
    popupOverlay.classList.remove('hidden');
  }

  const hidePopup = () => {
    popupOverlay.classList.add('hidden');
    popupBody.innerHTML = ''; // Kosongkan konten saat ditutup
  }

  popupClose.addEventListener('click', hidePopup);

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      hidePopup();
    }
  });
});

// === Fitur Multi Language ===
let langData = null;
let certificatesData = null;
let currentLanguage = 'id';

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

// === Dynamic Certificates Loading ===
async function loadCertificatesData() {
    try {
        const response = await fetch('data/certificates.json');
        if (!response.ok) {
            throw new Error('Gagal memuat file certificates.json');
        }
        certificatesData = await response.json();
        console.log('Data sertifikat berhasil dimuat:', certificatesData);
        renderCertificates();
    } catch (error) {
        console.error('Error memuat data sertifikat:', error);
        renderFallbackCertificates();
    }
}

function renderCertificates() {
    const container = document.getElementById('certificate-container');
    if (!container || !certificatesData) return;

    container.innerHTML = '';

    // Render existing certificates
    certificatesData.forEach(cert => {
        const certBox = document.createElement('div');
        certBox.className = 'certificate-box';
        
        const lang = currentLanguage.toLowerCase();
        const title = cert.title[lang] || cert.title.id;
        const description = cert.description[lang] || cert.description.id;
        const alt = cert.alt[lang] || cert.alt.id;

        certBox.onclick = () => showPopup(cert.popupContent);

        certBox.innerHTML = `
            <img src="${cert.image}" alt="${alt}" class="cert-thumbnail" loading="lazy">
            <div class="certificate-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;

        container.appendChild(certBox);
    });

    // Add "Coming Soon" box
    const comingSoonBox = document.createElement('div');
    comingSoonBox.className = 'certificate-box coming-soon';
    comingSoonBox.innerHTML = `
        <div class="coming-soon-overlay">
            <i class="fa-solid fa-plus"></i>
        </div>
        <div class="certificate-info">
            <h3 id="coming-soon">Coming Soon</h3>
        </div>
    `;
    
    container.appendChild(comingSoonBox);
}

function renderFallbackCertificates() {
    const container = document.getElementById('certificate-container');
    if (!container) return;

    // Fallback content if JSON fails to load
    container.innerHTML = `
        <div class="certificate-box" onclick="showPopup('<img src=\\'asset/certificate-responsive-web-design-faris-adilllah-yufiansyah.png\\' alt=\\'Sertifikat Responsive Web Design\\' style=\\'width:100%; max-width:700px; margin-top:15px;\\' loading=\\'lazy\\'>')">
            <img src="asset/certificate-responsive-web-design-faris-adilllah-yufiansyah.png" alt="Sertifikat Responsive Web Design" class="cert-thumbnail" loading="lazy">
            <div class="certificate-info">
                <h3>Responsive Web Design</h3>
                <p>FreeCodeCamp - 2025</p>
            </div>
        </div>
        <div class="certificate-box" onclick="showPopup('<img src=\\'asset/certificate-belajar-dasar-ai-by-dicoding-faris-adillah-yufiansyah.png\\' alt=\\'Sertifikat Belajar Dasar AI\\' style=\\'width:100%; max-width:700px; margin-top:15px;\\' loading=\\'lazy\\'>')">
            <img src="asset/certificate-belajar-dasar-ai-by-dicoding-faris-adillah-yufiansyah.png" alt="Sertifikat Belajar Dasar AI" class="cert-thumbnail" loading="lazy">
            <div class="certificate-info">
                <h3>Belajar Dasar AI</h3>
                <p>Dicoding - 2025</p>
            </div>
        </div>
        <div class="certificate-box coming-soon">
            <div class="coming-soon-overlay">
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="certificate-info">
                <h3 id="coming-soon">Coming Soon</h3>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    // Load data
    loadLanguageData();
    loadCertificatesData();
    
    const langContainer = document.querySelector('.lang-switch-container');
    const langButtons = document.querySelectorAll('.btn-switch-lang');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isEnglish = this.textContent === 'EN';
            
            // Hapus kelas active dari semua tombol
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambahkan kelas active ke tombol yang diklik
            this.classList.add('active');
            
            // Animasi geser
            if (isEnglish) {
                langContainer.classList.add('english');
            } else {
                langContainer.classList.remove('english');
            }
            
            const newLang = isEnglish ? 'EN' : 'ID';
            currentLanguage = newLang.toLowerCase();
            switchLanguage(newLang);
            
            // Re-render certificates with new language
            if (certificatesData) {
                renderCertificates();
            }
        });
    });
});

function switchLanguage(lang) {
    // console.log('Mengganti ke bahasa:', lang);
    
    if (!langData) {
        console.error('Data bahasa belum dimuat');
        return;
    }
    
    const currentLangData = langData[lang];
    if (!currentLangData) {
        console.error('Data untuk bahasa', lang, 'tidak ditemukan');
        return;
    }
    
    // Ganti teks di elemen
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

// Other Functions
const terhubung = () => {
  window.open('https://www.linkedin.com/in/faris-ay', '_blank');
};

const demo = (demo_url) => {
  window.open(demo_url, '_blank');
}
