import { Request, Response } from 'express'
import { BookService } from './books.service'

export class BooksController {
    async create(req: Request, res: Response) {
        const product = await new BookService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const products = await new BookService().list()

        return res.status(200).json(products)
    }
    
    async find(req: Request, res: Response) {
        const product = await new BookService().find(req.params.id)

        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new BookService().update(req.params.id, req.body)

        return res.status(200).json(product)
    }


    async delete(req: Request, res: Response) {
        const product = await new BookService().delete(req.params.id)

        return res.status(200).json("Sucessfuly deleted book!!")
    }
}

export default new BooksController()