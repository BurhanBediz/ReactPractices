import React from 'react'

const jsx1 = () => {
    const isAdmin = true;
  return (
    <div>
        {
         isAdmin ?
         <>
         <h3>Admin Menu</h3>
         <ul>
             <li>Create User</li>
             <li>Update User</li>
             <li>Delete User</li>
         </ul>
         </>
         :
         <>
         <h3>User Menu</h3>
         <ul>
             <li>Create Review</li>
             <li>Update Review</li>
         </ul>
         </>
        }
    </div>
  )
}

export default jsx1