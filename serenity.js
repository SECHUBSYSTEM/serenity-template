const menuButton = document.querySelector('.menu')
const nav = document.querySelector('.nav-items')
const Name = document.querySelector('.name')
const Email = document.querySelector('.Email')
const Number = document.querySelector('.Number')
const form = document.querySelector('.d2')
const rightFadeIn = document.querySelectorAll('.IU')
const leftFadeIn = document.querySelectorAll('.IU1')
const upFadeIn = document.querySelectorAll('.IU2')
const rotateFadeIn = document.querySelectorAll('.IU3')



menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    const opened = menuButton.getAttribute('aria-expanded')
    if (opened === 'false') {
        nav.style.display = "block"
        menuButton.setAttribute('aria-expanded', 'true')
    } else {
        nav.style.display = "none"
        nav.style.animation = " fade-out 800ms forwards alternate"
        menuButton.setAttribute('aria-expanded', 'false')
    }


})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        entry.target.classList.toggle('show-1', entry.isIntersecting)
        entry.target.classList.toggle('show-2', entry.isIntersecting)
        entry.target.classList.toggle('show-3', entry.isIntersecting)
        entry.target.classList.toggle('show-4', entry.isIntersecting)

        /* if you don't want your site fading back out,uncomment the next line*/
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        /*you can play around with the root, rootMargin depending on your site speed and networ speed*/
        rootMargin: '-150px',
        threshold: 0,
    }

)


rightFadeIn.forEach(rightFade => {
    observer.observe(rightFade)
})
leftFadeIn.forEach(leftFade => {
    observer.observe(leftFade)
})
upFadeIn.forEach(upFade => {
    observer.observe(upFade)
})
rotateFadeIn.forEach(rotateFade => {
    observer.observe(rotateFade)
})




form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}
const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

const validEmail = (Email) => {
    const re = /^(([^<>([\]\\.,;:\s@)]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = Name.value.trim();
    const emailValue = Email.value.trim();
    const numberValue = Number.value.trim();


    if (nameValue === '') {
        setError(Name, 'name must be provided')
    } else {
        setSuccess(Name)
    };
    if (emailValue === '') {
        setError(Email, 'Email must be provided')
    } else if (!validEmail(emailValue)) {
        setError(Email, 'provide a valid email address')
    } else {
        setSuccess(Email)
    };
    if (numberValue.length === '') {
        setError(Number, 'Please enter a number')
    } else {
        setSuccess(Number)
    };

}
