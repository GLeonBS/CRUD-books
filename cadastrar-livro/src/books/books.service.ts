import { BookTypes } from "./types/books.types" 
import  BookModel  from "./books.schema"

export class BookService {
    async create(book: BookTypes) {
        const createdBook = await BookModel.create(book)

        return createdBook
    }

    async list() {
        const listedBooks = await BookModel.find()

        return listedBooks
    }

    async find(id) {
        const findedBook = await BookModel.findById(id)

        return findedBook
    }

    async update(id, dataToUpdate : BookTypes) {
        const updatedBook = await BookModel.findOneAndUpdate({_id: id}, {
            title : dataToUpdate.title,
            subtitle : dataToUpdate.subtitle,
            publishedAt : dataToUpdate.publishedAt,
            author : dataToUpdate.author,
            volume : dataToUpdate.volume,
            isbn : dataToUpdate.isbn,
            edition : dataToUpdate.edition,
        }, {new : true})

        return updatedBook
    }


    async delete(id) {
        await BookModel.findOneAndDelete({_id: id})
        return
    }
}