// mathOperations.js
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// module.exports = {
    
//     subtract
// };
// const http = require('http')
const fs = require('fs')
// const port = process.env.PORT || 3000
// const hostname = 'aniket'
// const server = http.createServer((req, res) => {
    
   
//     res.setHeader('content-type', 'text/html')
//     if(req.url == '/about'){
//         res.statusCode = 200
//     res.end('<h1 style="text-align: center">hello world</h1><p style="background-color: blue;color: aqua;;;font-weight: 1000;width: 80vw;margin: auto;padding: auto;height: 20vh;padding: 15px 0 0 0;">Hello! I am Aniket, a diligent and detail-oriented individual with a passion for coding and math. I have a strong interest in Node.jsand npm, and Iam actively working on improving my skills in these areas. I also enjoy solving Class 9 CBSE-level math problems, finding satisfaction in methodical problem-solving. I strive for continuous learning and improvement in my technical abilities, and I am always eager to tackle new challenges.</p>')}
//     else if(req.url == '/'){
//         res.statusCode = 200
//        let data= fs.readFileSync('./index.html')
//         res.end(data.toString())
//     } 
//     else if(req.url == '/'){
//         res.statusCode = 200
//        let data= fs.readFileSync('./index.html')
//         res.end(data.toString())
//     } 
//     else if(req.url == '/me'){
//         res.statusCode = 200
//        let data2= fs.readFileSync('./about.html')
//         res.end(data2.toString())
//     } 
//     else{
//         res.statusCode=404
//         res.end(res.server)
//     } console.log(req.url)
// })
// server.listen(port, () => {
//     console.log(`page is running on http://:${port}/`)
// },)
    async function utils(){  const express=require('express')
     
const app = express()
const port = 8080
// app.use(express.static('public'))
  app.get('/', (req, res) => {
        res.statusCode = 200
        let data = fs.readFileSync('./index.html')
        res.end(data.toString())
       

      })
      app.use(express.json());
      app.post('/', (req, res) => {
        const receivedData = req.body;
        console.log('Received data:', receivedData);
        res.json({ message: 'Data received successfully' });
      })
  app.get('/index1',(req,res)=>{
  res.statusCode = 200
    let data1= fs.readFileSync('./index1.html')
          res.end(data1.toString())
        
         res.send(console.log(res.url))
})
;
  app.get('/me',(req,res)=>{
    res.statusCode = 200
      let data2= fs.readFileSync('./about.html')
            res.end(data2.toString())
})
 app.get('/about',(req,res)=>{
    res.statusCode = 200
       res.end('<title>About</title><h1 style="text-align: center">hello world</h1><p style="background-color: blue;color: aqua;;;font-weight: 1000;width: 80vw;margin: auto;padding: auto;height: 20vh;padding: 15px 0 0 0;">Hello! I am Aniket, a diligent and detail-oriented individual with a passion for coding and math. I have a strong interest in Node.jsand npm, and Iam actively working on improving my skills in these areas. I also enjoy solving Class 9 CBSE-level math problems, finding satisfaction in methodical problem-solving. I strive for continuous learning and improvement in my technical abilities, and I am always eager to tackle new challenges.</p>')})
        app.listen(port, (res) => {
        console.log(`Server is running on http://:${port}`);
        
    })
    
    }

  utils()