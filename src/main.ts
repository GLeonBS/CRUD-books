import './style.scss'
import formBooks from './formBooks/formBooks.html?raw' 
import { formService } from './formBooks/formBooks.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = formBooks

formService()
