export const formService = () => {
    const form = document.querySelector('form')!
    const changeButton = document.querySelector<HTMLButtonElement>("#change")!
    const bodyApplication = document.querySelector<HTMLDivElement>("#bodyApplication")!
    let pagina = 0
    const thisPage = window.location
    console.log(changeButton.textContent);
    changeButton.onclick = () => {
        console.log(form);
        if (pagina === 0) {
            changeButton.innerText = "Cadastrar um livro"
            bodyApplication.innerHTML = "Ola"
            pagina = 1
        }else{
            thisPage.reload()
        } 
    }

    if (form) {
        form.onsubmit = (ev) => {
            ev.preventDefault()
            const data = new FormData(form)

            console.log(data.entries());
            ev.preventDefault()

            console.log(Object.fromEntries(data.entries()))
        }
    }


}