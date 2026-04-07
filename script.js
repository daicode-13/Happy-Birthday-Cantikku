function showMenu() {
        document.getElementById('birthdayText').style.display = 'none';
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('menuTitle').style.display = 'block';
        document.getElementById('mainMenu').style.display = 'flex';
    }

    function resetToInitial() {
        document.getElementById('birthdayText').style.display = 'block';
        document.getElementById('startBtn').style.display = 'block';
        document.getElementById('menuTitle').style.display = 'none';
        document.getElementById('mainMenu').style.display = 'none';
        document.querySelectorAll('.section-content').forEach(sec => sec.style.display = 'none');
        document.getElementById('heroSection').style.display = 'flex';
    }

    function openPage(sectionId) {
        document.getElementById('heroSection').style.display = 'none';
        document.querySelectorAll('.section-content').forEach(sec => sec.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
        window.scrollTo(0,0);
    }

    function backToMenuOnly() {
        document.querySelectorAll('.section-content').forEach(sec => sec.style.display = 'none');
        document.getElementById('heroSection').style.display = 'flex';
        document.getElementById('birthdayText').style.display = 'none';
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('menuTitle').style.display = 'block';
        document.getElementById('mainMenu').style.display = 'flex';
    }

    function createHearts() {
        const container = document.getElementById('bgItems');
        const icons = ['❤️', '💖', '✨', '🎈'];
        setInterval(() => {
            const heart = document.createElement('div');
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            heart.style.opacity = '0.6';
            heart.style.transition = 'all 5s linear';
            container.appendChild(heart);
            setTimeout(() => { heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`; }, 100);
            setTimeout(() => { heart.remove(); }, 6000);
        }, 300);
    }

    createHearts();
