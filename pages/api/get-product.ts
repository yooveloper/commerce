import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
type Data = {
  items?: any
  message: string
}

async function getProduct(id: number) {
  try {
    const response = await prisma.products.findUnique({
      where: {
        id: id,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { id } = req.query
    if (id == null) {
      res.status(400).json({ message: `No id` })
    }
    const products = await getProduct(Number(id))
    res.status(200).json({ items: products, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
