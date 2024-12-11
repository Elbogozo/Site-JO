document.addEventListener("DOMContentLoaded", () => {
    const lettreFR = `
        Lorsque le directeur du Musée m’a confié cette mission particulière,
        j’ai ressenti un profond honneur. Organiser une exposition intitulée :
        « L’OLYMPISME, 32 jours avec Pierre de Coubertin : grandeur et mystères du père des JO modernes »
        m’a naturellement conduit à me questionner : pourquoi 32 jours ? Était-ce une simple coïncidence calendaire ?
        Un clin d’œil à l’origine française de Pierre de Coubertin ? Ce trait d’humour, je crois,
        aurait certainement été apprécié par l’homme lui-même. Ou peut-être est-ce simplement
        le chiffre porte-bonheur d’un musée si accueillant, où chaque visiteur peut profiter d’une pause
        artistique et temporelle unique. Mais, après tout, qu’importe !

        Pierre disait : « L’Olympisme n’est point un système, c’est un état d’esprit.
        Les formules les plus diverses peuvent s’en imprégner, et il n’appartient ni à une race ni à une époque
        de s’en attribuer le monopole exclusif. »

        En me plongeant dans ce projet, je me suis d’abord laissé emporter par mes émotions,
        liées à la figure emblématique de Pierre de Coubertin. Elles sont nombreuses et intenses.
        Permettez-moi de vous offrir deux conseils pour cette exposition : d’abord,
        laissez vos sens s’exprimer librement, puis, comme pour tout voyage dans l’imaginaire d’un autre,
        laissez votre joie et votre confiance en la vie prendre le dessus.

        Thomas Bach, président du CIO (Comité International Olympique),
        déclarait le 23 juin 2024 à l’Université de la Sorbonne :
        « Nous ne sommes pas là pour glorifier l’homme, mais pour comprendre le personnage. »
        Gardez cela en tête durant votre visite.

        Cette exposition vous invite à un voyage dans le quotidien, apparemment banal,
        mais riche de significations. Laissez de côté votre rationalisme au vestiaire, laissez émerger
        votre âme d’enfant et votre sens de la dérision. Mais, en même temps,
        gardez précieusement votre sens du questionnement éveillé. Celui qui vous pousse à sortir
        de votre zone de confort et à appréhender les situations sous des angles inattendus.

        Laissez-vous happer par l’univers de cet homme qui a embrassé la vie avec une ferveur indéniable.
        Il était un idéaliste de l'excellence sportive et de l'unité internationale, malgré une fin de vie
        marquée par la solitude et la pauvreté, un travailleur infatigable. Puissions-nous nous y retrouver
        et en tirer des enseignements.

        Au plaisir de vous rencontrer nombreux…

        Pablo Voltany,
        Commissaire de l’exposition « L’OLYMPISME, 32 jours avec Pierre de Coubertin : grandeur et mystères
        du père des JO modernes » Exposition temporaire au Palais Lumière d’Évian-les-Bains
        du 2 janvier au 2 février 2025
    `;

    const lettreEN = `
        When the Museum Director made this particular request of me,
        to hold an exhibition named: "OLYMPISM, 32 days with Pierre de Coubertin: greatness and
        mysteries of the father of the modern Olympics",
        I asked myself: Why? Not why me, forgive my impertinence,
        but why 32?
        A calendar coincidence?
        A disguised nod to France and thus to Pierre de Coubertin’s origins?
        This sense of humor, I believe, would have amused him.
        Or perhaps it's simply the lucky number of a most charming museum
        where everything is done to offer each visitor a temporal and artistic pause?
        But after all, what does it matter?

        Pierre said: "Olympism is not a system; it is a state of mind.
        The most diverse formulas can be infused with it, and no race nor era
        can claim exclusive monopoly over it."

        As I set to work, I first allowed myself to be carried away by my emotions,
        associated with Pierre de Coubertin, and they are plentiful.
        Allow me two pieces of advice for this exhibition: first, let your senses speak,
        and second, as with any journey into another's imagination,
        let your joy and trust in life prevail.

        Thomas Bach, President of the IOC (International Olympic Committee),
        paying homage to Pierre de Coubertin, stated on June 23, 2024 at the Sorbonne University:
        "We are not here to glorify the man, but to understand the figure."
        Keep this in mind during the exhibition.

        It is into this seemingly ordinary daily life that this exhibition invites you.
        Leave your Cartesian self at the cloakroom, let your inner child emerge,
        your sense of derision. And yet, keep your sense of inquiry fully awake.
        That which makes you step out of your comfort zone,
        that which allows you to approach a situation from an angle
        not necessarily one of propriety or the expected.

        In short, let yourself be drawn into the universe of this man who savored life
        with undeniable fervor, an idealist of sporting excellence and international unity,
        despite an end of life in solitude and poverty,
        may we find ourselves therein.

        Looking forward to welcoming all of you in great numbers…

        Pablo Voltany,
        Curator of the exhibition "OLYMPISM, 32 days with Pierre de Coubertin: greatness and mysteries
        of the father of the modern Olympics" Temporary exhibition at the Palais Lumière
        in Évian-les-Bains from January 2 to February 2, 2025
    `;

    const lettreContent = document.getElementById('lettre-content');
    const tradLetterBtn = document.getElementById('trad-letter-btn');
    let currentLang = 'fr';

    if (lettreContent && tradLetterBtn) {
        lettreContent.textContent = lettreFR;
        tradLetterBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            lettreContent.textContent = currentLang === 'fr' ? lettreFR : lettreEN;
            tradLetterBtn.textContent = currentLang === 'fr' ? "Traduire la lettre (FR/EN)" : "Translate the letter (EN/FR)";
            tradLetterBtn.setAttribute('aria-pressed', currentLang === 'en');
        });
    }

    const galerie = document.getElementById('galerie');
    const images = [
        {
            src: "images/Athletisme-1.png",
            alt: "Athlétisme 1",
              caption: "1"
        },
        {
            src: "images/Athletisme-2.png",
            alt: "Athlétisme 2",
              caption: "2"
        },
        {
            src: "images/Athletisme-3.png",
            alt: "Athlétisme 3",
              caption: "3"
        },
        {
            src: "images/Athletisme-4.png",
            alt: "Athlétisme 4",
              caption: "4"
        },
        {
            src: "images/Golf-1.png",
            alt: "Golf 1",
              caption: "5"
        },
        {
            src: "images/Golf-2.png",
            alt: "Golf 2",
              caption: "6"
        },
        {
            src: "images/Golf-3.png",
            alt: "Golf 3",
              caption: "7"
        },
        {
            src: "images/Golf-4.png",
            alt: "Golf 4",
              caption: "8"
        },
        {
            src: "images/Gymnastique-1.png",
            alt: "Gymnastique 1",
              caption: "9"
        },
        {
            src: "images/Gymnastique-2.png",
            alt: "Gymnastique 2",
              caption: "10"
        },
        {
            src: "images/Gymnastique-3.png",
            alt: "Gymnastique 3",
              caption: "11"
        },
        {
            src: "images/Gymnastique-4.png",
            alt: "Gymnastique 4",
              caption: "12"
        },
        {
            src: "images/Handball-1.png",
            alt: "Handball 1",
              caption: "13"
        },
        {
            src: "images/Handball-2.png",
            alt: "Handball 2",
              caption: "14"
        },
        {
            src: "images/Handball-3.png",
            alt: "Handball 3",
              caption: "15"
        },
        {
            src: "images/Handball-4.png",
            alt: "Handball 4",
              caption: "16"
        },
        {
            src: "images/Natation-1.png",
            alt: "Natation 1",
              caption: "17"
        },
        {
            src: "images/Natation-2.png",
            alt: "Natation 2",
              caption: "18"
        },
        {
            src: "images/Natation-3.png",
            alt: "Natation 3",
              caption: "19"
        },
        {
            src: "images/Natation-4.png",
            alt: "Natation 4",
            caption: "20"
        },
        {
            src: "images/Judo-1.png",
            alt: "Judo 1",
            caption: "21"
        },
        {
            src: "images/Judo-2.png",
            alt: "Judo 2",
            caption: "22"
        },
        {
            src: "images/Judo-3.png",
            alt: "Judo 3",
            caption: "23"
        },
        {
            src: "images/Judo-4.png",
            alt: "Judo 4",
            caption: "24"
        }
    ];

    const imagesToShow = images.sort(() => 0.5 - Math.random()).slice(0, 10);

    if (galerie) {
        galerie.innerHTML = imagesToShow.map(image => `
            <figure class="figure">
                <a href="${image.src}" data-lightbox="gallery" data-title="${image.caption}">
                    <img src="${image.src}" alt="${image.alt}" loading="lazy">
                </a>
                <figcaption>${image.caption}</figcaption>
            </figure>
        `).join('');
    }

    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.style.maxHeight = null;
                btn.nextElementSibling.setAttribute('aria-hidden', 'true');
            });
            if (!isActive) {
                button.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                const content = button.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });

    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };

    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
    };

    const consentStatus = getCookie('cookieConsent');

    if (!consentStatus) {
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
            cookieConsent.setAttribute('aria-hidden', 'false');
        }, 1000);
    } else if (consentStatus === 'declined') {
        handleDeclinedConsent();
    }

    acceptBtn.addEventListener('click', () => {
        setCookie('cookieConsent', 'accepted', 365);
        cookieConsent.classList.add('hidden');
        cookieConsent.setAttribute('aria-hidden', 'true');
    });

    declineBtn.addEventListener('click', () => {
        setCookie('cookieConsent', 'declined', 365);
        cookieConsent.classList.add('hidden');
        cookieConsent.setAttribute('aria-hidden', 'true');
        handleDeclinedConsent();
    });

    function handleDeclinedConsent() {
        const restrictedSections = ['oeuvres', 'video'];
        restrictedSections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
                const message = document.createElement('div');
                message.className = 'consent-message';
                message.innerHTML = '<p>Vous avez refusé l\'utilisation des cookies. L\'accès aux photos et à la vidéo est donc restreint.</p>';
                section.parentNode.insertBefore(message, section.nextSibling);
            }
        });
    }

    const navLinks = document.querySelectorAll('#navbar a');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !expanded);
        navbar.style.maxHeight = navbar.style.maxHeight ? null : `${navbar.scrollHeight}px`;
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.setAttribute('aria-expanded', 'false');
                navbar.style.maxHeight = null;
            }
        });
    });
});
