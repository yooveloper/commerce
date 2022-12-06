import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState<
    { id: string; name: string; createdAt: string }[]
  >([])

  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])
  return (
    <div>
      <p> Products List</p>
      {products &&
        products.map((item) => (
          <div key={item.id}>
            {item.name}
            <span>{item.createdAt}</span>
          </div>
        ))}
    </div>
  )
}
