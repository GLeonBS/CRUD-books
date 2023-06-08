import { Router } from "express"
import booksController from "./books/books.controller"

const routes = Router()

routes.post('/books', booksController.create)
routes.get('/books', booksController.list)
routes.get('/books/:id', booksController.find)
routes.put('/books/:id', booksController.update)
routes.delete('/books/:id', booksController.delete)

export default routes