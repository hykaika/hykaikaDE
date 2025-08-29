document.addEventListener('DOMContentLoaded', function() {
    const startDiv = document.getElementById('startAnimation');
    const mainContent = document.getElementById('mainContent');
    const showAnimBtn = document.getElementById('showStartAnimBtn');
    const animatedProfile = document.querySelector('.animated-profile');
    const welcomeText = document.querySelector('.welcome-text');
    
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);

    function startAnimation() {
        mainContent.style.display = 'none';
        mainContent.style.opacity = '0';
        startDiv.style.display = 'flex';
        overlay.style.opacity = '0';
        
        animatedProfile.style.animation = 'softPulse 4s ease-in-out infinite';
        animatedProfile.style.opacity = '1';
        animatedProfile.style.transform = 'scale(1)';
        animatedProfile.style.borderRadius = '50%';
        
        welcomeText.style.opacity = '0';

        setTimeout(() => {
            overlay.style.opacity = '0';
            animatedProfile.style.borderRadius = '25%';

            animatedProfile.style.animation = 'fadeOut 1.5s forwards';
            welcomeText.style.animation = 'fadeOut 1.5s forwards';

            setTimeout(() => {
                startDiv.style.display = 'none';
                mainContent.style.display = 'block';
                mainContent.style.animation = 'contentAppear 1s forwards';
            }, 1200);
        }, 4200);

    }

    startAnimation();

    showAnimBtn.addEventListener('click', () => {
        overlay.style.opacity = '0';
        mainContent.style.display = 'none';
        startAnimation();
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }

    const socialLinksData = {
        youtube: 'https://www.youtube.com/@hykaika',
        instagram: 'https://www.instagram.com/hykaika',
        tiktok: 'https://www.tiktok.com/@hykaika',
        twitch: 'https://www.twitch.tv/hykaika',
        github: 'https://github.com/hykaika',
        twitter: 'https://twitter.com/Teamhykaika',
        discord: 'https://discord.gg/D2YM5wSPQ3'
    };
    
    Object.keys(socialLinksData).forEach(platform => {
        const link = document.querySelector(`.social-link.${platform}`);
        if (link) {
            link.href = socialLinksData[platform];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});
