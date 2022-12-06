import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  items?: any
  message: string
}

async function getDetail(pageId: string, propertyId: string) {
  try {
  } catch (error) {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    const { pageId, propertyId } = req.query
    const response = await getDetail(String(pageId), String(propertyId))
    res.status(200).json({ items: response, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
