import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  items?: any
  message: string
}

async function getItems() {
  try {
  } catch (error) {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    const response = await getItems()
    res.status(200).json({ items: response, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
