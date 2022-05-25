import { Pagination } from '@mantine/core';
import React from 'react'


const Pages = ({setpage, numofpages = 10}) => {

    const changepage = (page) => {
        setpage(page);
      window.scroll(0,0);  
    }
  return (
      <>
      <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 150,
          marginBottom: 60,
          zIndex: 10,
      }}>
    <Pagination 
    total={numofpages} withControls={false}
    count={numofpages}
     boundaries={1}
     initialPage={1}
     color="blue" radius="lg"
     onClick={(e) => changepage(e.target.textContent)}
     />
     </div>
      </>
  )
}

export default Pages;