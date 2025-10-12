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

  // --- Logika Carousel Proyek ---
  const track = document.querySelector('.project-track'); // Ambil semua data proyek
  if (track) { // Cek apakah elemen track ada
    const slides = Array.from(track.children); // Buat array dari semua slide proyek.
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const dotsNav = document.querySelector('.carousel-nav-dots');
    const slideWidth = slides[0].getBoundingClientRect().width; // Dapatkan lebar satu slide.

    let currentIndex = 0; // index slide yang aktif

    // Buat dots navigasi berdasarkan jumlah slide
    slides.forEach((slide, index) => {
      const dot = document.createElement('button'); // Buat elemen dot
      dot.classList.add('dot'); // Tambahkan class dot
      if (index === 0) dot.classList.add('active'); // Jadikan dot pertama aktif
      dotsNav.appendChild(dot); // Tambahkan dot ke dalam navigasi
    });

    const dots = Array.from(dotsNav.children); // Buat array dari semua elemen dot. Sama kayak slides

    // Fungsi untuk memperbarui dot yang aktif
    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('active'); // Hapus class active dari dot lama.
      targetDot.classList.add('active'); // Tambahkan class active ke dot baru.
    };

    // Fungsi untuk memindahkan slide
    const moveToSlide = (targetIndex) => {
      track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)'; // Geser track ke posisi slide tujuan.
      // Rumus untuk geser slide
      // translateX(- lebarSlide * indexTujuan)

      const currentDot = dots[currentIndex]; // Dot yang aktif
      const targetDot = dots[targetIndex]; // Dot tujuan
      updateDots(currentDot, targetDot); // Update status aktif pada dot.
      currentIndex = targetIndex; // Update indeks slide yang aktif.
    };

    // Tombol next
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length; // Hitung indeks slide berikutnya (looping).
      // rumus (indeks sekarang + 1) mod jumlah slide
      moveToSlide(nextIndex); // Pindahkan ke slide berikutnya.
    });

    // Tombol prev
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length; // Hitung indeks slide sebelumnya (looping).
      // rumus (indeks sekarang - 1 + jumlah slide) mod jumlah slide
      moveToSlide(prevIndex); // Pindahkan ke slide sebelumnya.
    });

    // Tombol navigasi lewat dot
    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button.dot'); // Cari elemen dot yang diklik.
      if (!targetDot) return; // Jika bukan dot yang diklik, abaikan.
      const targetIndex = dots.findIndex(dot => dot === targetDot); // Cari indeks dari dot yang diklik
      moveToSlide(targetIndex);
    });
  }

	// --- TOGGLE SIDEBAR MOBILE ---
	const menuToggle = document.getElementById('menu-toggle');
	const nav = document.querySelector('header nav');

	if (menuToggle && nav) {
	  menuToggle.addEventListener('click', () => {
	    nav.classList.toggle('active');
	    
	    // Optional: Ubah ikon menu menjadi X ketika aktif
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
});

const terhubung = () => {
  window.open('https://www.linkedin.com/in/faris-ay', '_blank');
};

const demo = () => {
  const demo_list = ["ciluk baa", "hahaha", "wkwkwk", "aduh", "astaga", "yah", "yey", "sip", "mantap", "oke"];
  const randomIndex = Math.floor(Math.random() * demo_list.length);
  alert(demo_list[randomIndex]);
}
