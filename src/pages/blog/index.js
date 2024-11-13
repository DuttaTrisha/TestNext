import React from 'react'
import Image from 'next/image'
import Panda from "../../../public/images/panda.jpg";

export default function Blog() {
  return (
    <>
      <h2>This is our blog component</h2>
      <img src="images/lion.jpg" alt="lion" />
      <br/><br/>
      <h2>Image optimization in next js</h2>
      <Image src={Panda} alt="panda bear" />
    </>
  )
}
