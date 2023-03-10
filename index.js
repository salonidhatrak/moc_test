// function getData(){
//     return fetch(`http://localhost:3000/posts`)
//     .then((res)=>{
//         return res.json()
//     })
// }

// function handleData(){
//     getData().then((res)=>{
//         console.log(res)
//         append(res)
//      })
// }

// handleData();

// function deletefun(id){
//     return fetch (`http://localhost:3000/posts${id}`,{
//         method:"DELETE",
//         headers:{
//             'Content-Type':'application/json'
//         }

//     })
// }

// function handledelete(id){
//     deletefun(id).then((res)=>handleData())
// }

// function postfunction (data){
//     return fetch(`http://localhost:3000/posts`,{
//         method:"POST",
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(data)
//     })
// }

// function handlePost(data){
//     postfunction(data).then((res)=>handleData())
// }

// function append(data){
//     document.getElementById('container').innerHTML=null
//     data.forEach((el)=>{
        
//         let div=document.createElement('div')

//         let p = document.createElement('p');
//         p.textContent=el.title;

//         btn=document.createElement('button')
//         btn.textContent="Delete";
//         btn.addEventListener('click',function(){
//             handledelete(el.id)
//         })

//         div.append(p,btn)
//         document.getElementById('container').append(div)
//     })
// }


const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);