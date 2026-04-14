// ===============================
// GLOBAL ELEMENT REFERENCES
// ===============================
const music = document.getElementById('bgMusic');
const heroSection = document.getElementById('heroSection');
const birthdayText = document.getElementById('birthdayText');
const startBtn = document.getElementById('startBtn');
const menuTitle = document.getElementById('menuTitle');
const mainMenu = document.getElementById('mainMenu');
const sections = document.querySelectorAll('.section-content');

// ===============================
// AUDIO SETTINGS
// ===============================
const volumeLevels = {
    home: 0.25,
    gallerySec: 0.20,
    letterSec: 0.35,
    faithSec: 0.15
};

let isMusicStarted = false;

// ===============================
// SMOOTH FADE IN AUDIO
// ===============================
function fadeInAudio(targetVolume = 0.25, speed = 100) {
    music.volume = 0;

    music.play().catch((error) => {
        console.log("Audio gagal diputar:", error);
    });

    let volume = 0;

    const fadeAudio = setInterval(() => {
        if (volume < targetVolume) {
            volume += 0.01;
            music.volume = Math.min(volume, targetVolume);
        } else {
            clearInterval(fadeAudio);
        }
    }, speed);
}

// ===============================
// UPDATE MUSIC BY SECTION
// ===============================
function updateSectionMusic(sectionId) {
    const targetVolume = volumeLevels[sectionId] || 0.25;
    music.volume = targetVolume;
}

// ===============================
// SHOW MAIN MENU
// ===============================
function showMenu() {
    if (!isMusicStarted) {
        fadeInAudio(volumeLevels.home);
        isMusicStarted = true;
    }

    birthdayText.style.display = 'none';
    startBtn.style.display = 'none';
    menuTitle.style.display = 'block';
    mainMenu.style.display = 'flex';
}

// ===============================
// RESET TO HOME
// ===============================
function resetToInitial() {
    birthdayText.style.display = 'block';
    startBtn.style.display = 'block';
    menuTitle.style.display = 'none';
    mainMenu.style.display = 'none';

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    heroSection.style.display = 'flex';

    updateSectionMusic('home');
}

// ===============================
// OPEN SECTION PAGE
// ===============================
function openPage(sectionId) {
    heroSection.style.display = 'none';

    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    updateSectionMusic(sectionId);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===============================
// BACK TO MENU ONLY
// ===============================
function backToMenuOnly() {
    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    heroSection.style.display = 'flex';

    birthdayText.style.display = 'none';
    startBtn.style.display = 'none';
    menuTitle.style.display = 'block';
    mainMenu.style.display = 'flex';

    updateSectionMusic('home');
}

// ===============================
// FLOATING HEARTS EFFECT
// ===============================
function createHearts() {
    const container = document.getElementById('bgItems');
    const icons = ['❤️', '💖'];

    setInterval(() => {
        const heart = document.createElement('div');

        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = '0.6';
        heart.style.transition = 'all 5s linear';

        heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        container.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

createHearts();
