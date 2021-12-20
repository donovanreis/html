'use strict'

const openModal=()=> document.getElementById('modal')
 .classList.add('active')

 const closeModal=()=>document.getElementById('modal')
  .classList.remove('active')

  const tempClient={
        nome:"fernando",
        email:"fernandoleonid@gmail.com",
        celular:"1112345988",
        cidade:"são roque",

  }

   const createClient=(client) => {
       const db_client.push(client) 
       localStorage.setItem("db_client",JSON.stringify(client))

   }                                                                              


document.getElementById('cadastrarCliente')
   .addEventListener('click',openModal)
document.getElementById('modalClose')
    .addEventListener('click',closeModal)