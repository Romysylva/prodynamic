import "../styles/main.scss";


const Prodynamic = () => {

    const prodynamic = document.querySelectorAll(".pro_dyn_Anim");

    for (let i = 0; i < prodynamic.length; i++) {

        const windowHeight = window.innerHeight;
        const elementTop = prodynamic[i].getBoundingClientRect().top;
        const elementVisible = 100;

        elementTop < windowHeight - elementVisible
            ? prodynamic[i].classList.add("onActive")
            : prodynamic[i].classList.remove("onActive");

    }

}
window.addEventListener("scroll", Prodynamic);

export default  Prodynamic;
