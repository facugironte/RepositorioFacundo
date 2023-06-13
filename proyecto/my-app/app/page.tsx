'use client'

import Image from 'next/image'
import Footer from '../src/components/footer.jsx'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() =>{
    import("bootstrap/dist/js/bootstrap.js");
  }, [])

  return (<>
      <main className='container'>
          <div>
            <p>Hola</p>
          </div>
      </main>
      <Footer></Footer>
    </>
  )
}
