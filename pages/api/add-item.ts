import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

async function addItem(name: string) {
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
    await addItem(String(name))
    res.status(200).json({ message: `Success ${name}` })
  } catch (error) {
    res.status(400).json({ message: `Failed ${name}` })
  }
}
