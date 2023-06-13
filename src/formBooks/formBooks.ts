import listBooks from './listBooks.html?raw'

export const formService = async () => {
    const form = document.querySelector('form')!
    const changeButton = document.querySelector<HTMLButtonElement>("#change")!
    const bodyApplication = document.querySelector<HTMLDivElement>("#bodyApplication")!
    let pagina = 0
    const message = document.querySelector<HTMLSpanElement>("#message")!
    const thisPage = window.location

    interface book {
        author: string,
        edition: Number,
        isbn: Number,
        publishedAt: Date,
        subtitle : String,
        title: String,
        volume: Number
    }
    async function cadastraLivro(book: any) {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
            const url = await fetch("http://localhost:3000/books", options)
            message.innerText = "Livro cadastrado com sucesso!!!"
            message.style.color = "green"
            return url
        } catch (er) {
            console.error(er);
        }
    }

    changeButton.onclick = async () => {
        if (pagina === 0) {
            let tableData = [{}]
            const content = await fetch("http://localhost:3000/books")
                .then((response) => response.json())
                .then((data) => {
                    tableData = data;
                })
            bodyApplication.innerHTML = listBooks
            const table = document.querySelector<HTMLTableElement>('table')!
            console.log(table);
            console.log(bodyApplication);
            tableData.forEach((element) => {
                let tr = document.createElement('tr')
                let tdTitle = document.createElement('td')
                let tdSubtitle = document.createElement('td')
                let tdPublishedAt = document.createElement('td')
                let tdAuthor = document.createElement('td')
                let tdVolume = document.createElement('td')
                let tdIsbn = document.createElement('td')
                let tdEdition = document.createElement('td')
                tdTitle.innerHTML = element.title
                tdSubtitle.innerHTML = element.subtitle
                tdPublishedAt.innerHTML = element.publishedAt
                tdAuthor.innerHTML = element.author
                tdVolume.innerHTML = element.volume
                tdIsbn.innerHTML = element.isbn
                tdEdition.innerHTML = element.edition
                tr.appendChild(tdTitle)
                tr.appendChild(tdSubtitle)
                tr.appendChild(tdPublishedAt)
                tr.appendChild(tdAuthor)
                tr.appendChild(tdVolume)
                tr.appendChild(tdIsbn)
                tr.appendChild(tdVolume)
                tr.appendChild(tdEdition)
                table.appendChild(tr)
            })
            
            changeButton.innerText = "Cadastrar um livro"
            
            pagina = 1
        } else {
            thisPage.reload()
        }
    }
    if (form) {
        form.onsubmit = (ev) => {
            ev.preventDefault()
            const data = new FormData(form)
            cadastraLivro(Object.fromEntries(data.entries()))
            form.reset()

        }
    }


}