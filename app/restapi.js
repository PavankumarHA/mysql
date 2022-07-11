const express = require('express')
const app = express()
app.use(express.json())  // means  all values we receive json formets / if we not give line we get error

app.get('/', (req, res)=>{        // '/' means router, it specify some specific tast
    res.send("hello wordls")   // res means display the some data
})

const products = [
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,                   // this all json formet
        name:"sony"
    },
    {
        id:3,
        name:"mi"
    }
]

app.get('/product', (req, res)=>{
    res.json(products)                          // json means bcz we given json formet
})
app.get('/product:id', (req, res)=>{
    const newData = products.filter(item => item.id.toString === req.params.id) // we access throught url values we use req method like id  // req.params.id req means url ninda baro values na access madbeku andre req madutte like id   
   return res.send(newData)                                                         
})                                       // post meand posting some data to the backend // put means editing and updating , similar to post 
app.post('/addproducts', (req,res)=>{     // if we post method we use only req.body
    const {id,name} = req.body;        // re. body  body means we can able to receivable entire Object and we able to receive tree structure
  console.log(id, name)
  return res.send('data stores ! !')
})                                                                            
app.listen(5000, ()=> console.log('server running...'));   //  req.params.is parmsthe value passed at a parameter  