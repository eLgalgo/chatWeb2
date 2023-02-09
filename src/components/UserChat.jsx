import React from 'react'

const userChat = () => {
  return (
    <div className='searchUser'>
        <div className='search'>
            <input type="text" className='searchInput' placeholder='Buscar Usuario'/>
        </div>
        <div className='searchChat'>
            <img src="https://www.w3.org/TR/2000/NOTE-SVG-access-20000807/tiger.png" alt="" />
            <div className='userChatInfo'>
                <span>Carlos</span>
            </div>
        </div>
    </div>
  )
}

export default userChat