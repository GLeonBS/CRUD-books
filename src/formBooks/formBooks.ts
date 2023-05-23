export const formService = () => {
    const form = document.querySelector('form')!
    
    if(form){
        const data = new FormData(form)
        
        console.log(data.entries());

        form.onsubmit = (ev) => {
            ev.preventDefault()

            console.log(Object.fromEntries(data.entries()))
        }
    }
}