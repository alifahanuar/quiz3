let dbUsers = [ 
  { 
      username: "alifah", 
      password: "123", 
      name: "alifah", 
      email: "alfhanr@gmail.com" 
  }, 
  { 
      username: "hanim", 
      password: "1234", 
      name: "alifah", 
      email: "hanim@gmail.com" 
  }, 
  { 
      username: "fa", 
      password: "1235", 
      name: "fa", 
      email: "fa@gmail.com" 
  } 
] 
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    let result = login(
      req.body.username,
      req.body.password
      )
    res.send('Login')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/bye', (req, res) => {
    res.send('Bye World!')
  })

  app.post('/register', (req, res) => {
    let result = register(
      req.body.username,
      req.body.password,
      req.body.name,
      req.body.email
    )
    res.send(result)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function login (reqUsername,reqPassword){ 
  let matchUser = dbUsers.find(                            //find 
   user => user.username == reqUsername // x => console.log(x), => dia buat semua  
   )    
   if (!matchUser)return "User not found!" 
   if(matchUser.password == reqPassword){ 
       return matchUser 
   }else{ 
       return "Invalid password" 
   } 
  }
  
  function register(reqUsername,reqPassword,reqName,reqEmail){ 
    dbUsers.push({                                                  //push 
    username: reqUsername, 
    password: reqPassword, 
    name: reqName, 
    email: reqEmail 
    }) 
} 