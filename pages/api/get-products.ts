import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
type Data = {
  items?: any
  message: string
}

async function getProducts() {
  try {
    const response = await prisma.products.findMany()
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
    const products = await getProducts()
    res.status(200).json({ items: products, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
