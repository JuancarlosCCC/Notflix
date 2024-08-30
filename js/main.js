//**Begin of language change section**

const switchLanguage = (code) => {
    const languages = {
        english: {
            "sing-in-button": "Sign in",
            "header1": "Unlimited movies, TV shows, and more",
            "firstp": "Watch anywhere. Cancel anytime.",
            "secondp": "Ready to watch? Enter your email to create or restart your membership.",
            "GetS-button": `Get Started ${" "}>`,
            "enjoyTv": "Enjoy on your TV",
            "feelLike": "Feel like you're in the old cinema",
            "memberThe": "Remember the past nostalgically",
            "donFor": "Don't forget the past because it's where you come from",
            "faq": "Frequently Asked Questions",
            "whatNotIs": "What is Notflix?",
            "whatNotIs2": `Notflix is a streaming platform that provides an extensive range of acclaimed TV shows, films, anime, documentaries, and more across thousands of internet-enabled devices.

                            With a single monthly subscription, you can enjoy unlimited viewing with no commercials at any time. There's always fresh content to explore, as new TV shows and movies are added weekly!`,
            "notflixCost": "How much does Notflix cost?",
            "notflixCost2": "Enjoy Notflix on your smartphone, tablet, Smart TV, laptop, or streaming device for a single monthly fee. Plans are available from S/ 24.90 to S/ 44.90, with no hidden fees or contracts.",
            "wWatch": "Where can I watch?",
            "wWatch2": "Watch whenever and wherever you want. Simply log in to your Notflix account to instantly stream at notflix.com from your computer or on any internet-enabled device with the Notflix app, such as smart TVs, smartphones, tablets, streaming devices, and game consoles.",
            "WcIwoNot": "What can I watch on Notflix?",
            "WcIwoNot2": "Notflix offers a vast collection of feature films, documentaries, TV shows, anime, and acclaimed Notflix originals. Enjoy unlimited viewing whenever you like!",
            "loginH": "Sign In",
            "signInBtn": "Sign In",
            "fpass": "Forgot password?",
            "labelF-checkB": "Remember me",
            "nwtNotflix": "New to Notflix?",
            "fkerror": "\xa0Sign up now."
        },
        español: {
            "sing-in-button": "Iniciar sesión",
            "header1": "Películas ilimitadas, series y más",
            "firstp": "Mira donde quieras, cancela cuando quieras.",
            "secondp": "¿Listo para disfrutar? Ingresa tu correo para crear o reiniciar tu cuenta",
            "GetS-button": `Comenzar >`,
            "enjoyTv": "Disfruta en tu TV",
            "feelLike": "Siente como si estuvieras en un viejo cine",
            "memberThe": "Recuerda el pasado con nostalgia",
            "donFor": "No olvides el pasado porque es de donde tú vienes",
            "faq": "Preguntas frecuentes",
            "whatNotIs": "¿Qué es Notflix?",
            "whatNotIs2": `Notflix es una plataforma de streaming que provee una extensa variedad de series de televisión, películas, anime, documentales y más para varios dispositivos conectados.
                            
                            Con un mes de subscripción, puedes ver lo que quieras de manera ilimitada sin comerciales en cualquier momento. Siempre hay nuevo contenido que explorar, así como nuevas series de televisión y películas se agregan semanalmente.`,
            "notflixCost": "¿Cuánto cuesta Notflix?",
            "notflixCost2": "Disffruta Notflix en tu celular, tablet, televisión, laptop, o plataforma de streaming por un mes gratis. Los planes van desde S/ 24.90 hasta S/ 44.90, sin cargos o contratos extras.",
            "wWatch": "¿En donde puedo ver?",
            "wWatch2": "Mira donde quieras y cuando quieras. Simplemente inicia sesión en tu cuenta de Notflix para instantaneamente ver en Notflix.com desde tu computadora o cualquier aparato con internet y la aplicación de Notflix, como tu televisión, celular, tablet, y otros dispositivos de streaming.",
            "WcIwoNot": "¿Que puedo mirar en Notflix?",
            "WcIwoNot2": "Notflix ofrece una gran variedad de películas, documentales, series de televisión, y los aclamados Notflix originals. Disfruta de una vista ilimitada cuando quieras!",
            "loginH": "Iniciar Sesión",
            "signInBtn": "Iniciar Sesión",
            "fpass": "¿Olvidaste la contraseña?",
            "labelF-checkB": "Recuerdame",
            "nwtNotflix": `¿Nuevo en Notflix? ${"\xa0"}`,
            "fkerror": "Registrate ahora."
        }
    };

    for (let lang of Object.keys(languages["english"])) {
        document.querySelectorAll(`.${lang}`).forEach(element => {
            element.innerText = languages[code][lang];
        });
    }

    document.querySelectorAll('.languageSelect').forEach(selectElement => {
        selectElement.value = code;
    });

    // Guardar la preferencia de idioma en el local storage
    localStorage.setItem('preferredLanguage', code);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const languageSelect = document.getElementById('languageSelect');

    // Cargar la preferencia de idioma guardada
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    }

    document.querySelectorAll('.languageSelect').forEach(selectElement => {
        selectElement.addEventListener("change", function () {
            switchLanguage(this.value);
        });
    });
});

//**FAQ expanded**

const expandBtn = () => {
    let buttons = document.querySelectorAll(".insideAskB");
    let btnsExpand = document.querySelectorAll(".hiddenDiv");

    buttons.forEach((button, index) => {
        let btnExpand = btnsExpand[index];

        button.addEventListener("click", () => {
            let isCurrentlyHidden = btnExpand.hasAttribute("hidden");

            btnsExpand.forEach((btn, i) => {
                btn.setAttribute("hidden", "");
                buttons[i].setAttribute('aria-expanded', false);
            })

            if (isCurrentlyHidden) {
                btnExpand.removeAttribute("hidden");
                button.setAttribute('aria-expanded', true);
            } else {
                btnExpand.setAttribute("hidden", "");
                button.setAttribute('aria-expanded', false);
            }
        });
    });
}
expandBtn();

//** Sign in **

const signIn = () => {
    let sIn = document.querySelector(".sing-in-button");
    let back = document.querySelector(".back");
    let openS = document.querySelector(".openSignIn");
    let topSection = document.querySelector(".topSection");

    sIn.addEventListener("click", () => {
        let isCurrentlyHopen = openS.hasAttribute("hidden");
        let isCurrentlyHback = back.hasAttribute("hidden");

        if (isCurrentlyHback && isCurrentlyHopen) {
            openS.removeAttribute("hidden");
            back.removeAttribute("hidden");
            topSection.classList.add("hiddenAnimation");
        }
    });

    back.addEventListener("click", () => {
        if (!openS.classList.contains("hiddenAnimation") && !back.classList.contains("backdown")) {
            openS.classList.add("hiddenAnimation");
            back.classList.add("backdown");
            topSection.classList.remove("hiddenAnimation");
            topSection.classList.add("showAnimation");

            setTimeout(() => {
                openS.setAttribute("hidden", "");
                back.setAttribute("hidden", "");
                openS.classList.remove("hiddenAnimation");
                back.classList.remove("backdown");
                topSection.classList.remove("showAnimation");
            }, 3000)
        }
    });
}

signIn();

// Show or not show the password

const showPassword = () => {
    let passWordInput = document.querySelector(".user.passWord");
    let eyeBtnon = document.querySelector(".showPasswordBtn.eyeBtnon");
    let eyeBtnoff = document.querySelector(".showPasswordBtn.eyeBtnoff");

    passWordInput.addEventListener("mousedown", () => {

        if (passWordInput.type === 'password') {
            eyeBtnon.removeAttribute("hidden");
            eyeBtnoff.setAttribute("hidden", true);
        } else {
            eyeBtnon.setAttribute("hidden", true);
            eyeBtnoff.removeAttribute("hidden");
        }
    });

    document.addEventListener("mousedown", (event) => {

        if (!passWordInput.contains(event.target) && !eyeBtnon.contains(event.target) && !eyeBtnoff.contains(event.target)) {
            eyeBtnon.setAttribute("hidden", true);
            eyeBtnoff.setAttribute("hidden", true);
        }
    });

    eyeBtnon.addEventListener("click", (event) => {
        event.preventDefault();
        passWordInput.type = 'text';
        eyeBtnon.setAttribute("hidden", true);
        eyeBtnoff.removeAttribute("hidden");
    });

    eyeBtnoff.addEventListener("click", (event) => {
        event.preventDefault();
        passWordInput.type = 'password';
        eyeBtnoff.setAttribute("hidden", true);
        eyeBtnon.removeAttribute("hidden");
    });
}

showPassword();

// Error message 

const cannotSignIn = () => {
    let email = document.querySelector(".user");
    let password = document.querySelector(".user.passWord")
    let signInBtn = document.querySelector(".signInBtn")

    let emailInputError = document.querySelector(".emailInputError");
    let passwordError = document.querySelector(".passwordError");

    signInBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (email.value === "") {
            emailInputError.classList.add("visible");
            email.classList.add("border-red");
        } else {
            emailInputError.classList.remove("visible");
            email.classList.remove("border-red");
        }

        if (password.value === "") {
            passwordError.classList.add("visible");
            password.classList.add("border-red");
        } else {
            passwordError.classList.remove("visible");
            password.classList.remove("border-red");
        }
    })
}

cannotSignIn();

//** Get started button & Email input **

const getEmailInput = () => {
    const emailInputs = document.querySelectorAll('.email-input');

    emailInputs.forEach((input) => {
        input.addEventListener('input', function () {
            this.setAttribute('value', this.value);
        });
    });
}

getEmailInput();

const getStartedClick = () => {
    let buttons = document.querySelectorAll(".GetS-button");
    let emailInputs = document.querySelectorAll(".email-input");
    let emailErrors = document.querySelectorAll(".emailRequired.hidden");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let emailInput = emailInputs[index];
            let emailError = emailErrors[index];

            console.log(`Button ${index} clicked`);
            console.log(`Email Input:`, emailInput);
            console.log(`Email Error Div:`, emailError);

            if (emailInput.value === "") {
                emailError.classList.remove("hidden");
                emailInput.classList.add("border-red");
                emailInput.setCustomValidity('');
            } else if (!emailInput.value.includes("@")) {
                emailError.classList.remove("hidden");
                emailInput.classList.add("border-red");
                emailInput.setCustomValidity('Incluye un signo "@" en la dirección de correo electrónico.');
            } else {
                emailError.classList.add("hidden");
                emailInput.classList.remove("border-red");
                emailInput.setCustomValidity("");
            }

            emailInput.reportValidity();
        });
    });
}

getStartedClick();

//** Blur transition **

const blurTransition1 = () => {
    let section2 = document.querySelector(".section2");
    let img = document.querySelector(".old-cinema.cinema1");

    section2.addEventListener("mouseover", () => {
        if (!img.classList.contains("old-cinemahover")) {
            img.classList.add("old-cinemahover");
        }
    });

    section2.addEventListener("mouseout", () => {
        if (img.classList.contains("old-cinemahover")) {
            img.classList.remove("old-cinemahover");
        }
    })
}

blurTransition1();

const blurTransition2 = () => {
    let section3 = document.querySelector(".section3");
    let img = document.querySelector(".old-cinema.cinema2");

    section3.addEventListener("mouseover", () => {
        if (!img.classList.contains("old-cinemahover")) {
            img.classList.add("old-cinemahover");
        }
    });

    section3.addEventListener("mouseout", () => {
        if (img.classList.contains("old-cinemahover")) {
            img.classList.remove("old-cinemahover");
        }
    })
}

blurTransition2();