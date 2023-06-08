export const formService = () => {
    const form = document.querySelector('form')!
    const changeButton = document.querySelector<HTMLButtonElement>("#change")!
    const bodyApplication = document.querySelector<HTMLDivElement>("#bodyApplication")!
    let pagina = 0
    const thisPage = window.location
    const rota = "http://localhost:3000/books"

    changeButton.onclick = () => {
        if (pagina === 0) {
            changeButton.innerText = "Cadastrar um livro"
            bodyApplication.innerHTML = "Você não tem um livro cadastrado :/"
            pagina = 1
        } else {
            thisPage.reload()
        }
    }
    if (form) {
        form.onsubmit = (ev) => {
            ev.preventDefault()
            const data = new FormData(form)
            console.log(Object.fromEntries(data.entries()))
        }
    }


}