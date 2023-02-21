import React from 'react'

const Detail = () => {
  return (
    <div>
        <img src="/img/thumb-karigurashi001.png" alt=''/>
    </div>
  )
}

export default Detail



export async function getServerSideProps(){
    const res = await axios.get(`http://localhost:3000/api`)
    const data = res.data
  
    return {props: {data}}
  }