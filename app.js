require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connection = require('./db')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const foods = require('./routes/foods')
const SignUp = require('./models/register')
const Product = require('./models/products')
//const profileRoutes = require('./routes/profile/profile')

   
app.post('/api/v1/products', async(req, res) =>{
    try {
     const cProduct = await Product.create(req.body)
     res.status(200).json({products: cProduct})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message}) 
    }
})

app.post('/upload'), async(req, res) =>{
    
}

app.get('/api/v1/products', async(req, res) =>{
    try {
       const products = await Product.find({})
       if(!products){
        return res.status(404).json({message:`cannot find product`})
       }
       const newProduct = await Product.find({})
       res.status(200).json({total_size: 6, type_id: 2, offset:0, products: newProduct})
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.get('/api/v1/products/:id', async(req, res) =>{
    try {
        const  {id}  = req.params
       const searchProduct = await Product.findById(id)
       res.status(200).json({success: true ,searched: searchProduct})
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})



app.put('/api/v1/products/:id', async(req, res) =>{
    try {
        const {id} = req.params
       const products = await Product.findByIdAndUpdate(id, req.body);
       if(!products){
          return res.status(404).json({message:`cannot find product with id ${id}`})
       }
       const updateProduct = await Product.findById(id)
       res.status(200).json({success:true, msg:"Product updated successfully", updated: updateProduct})
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})

app.delete('/api/v1/products/:id', async(req, res) =>{
    try {
        const {id} = req.params
       const products = await Product.findByIdAndDelete(id)
       if(!products){
        return res.status(404).json({message: `no product to delete with id ${id}`})
       }
       const deleteProduct = await Product.findById(id)
      return res.status(200).json({success: true, msg: 'Product deleted successfully',deleteProduct})
    } catch (error) {
        res.status(500).json({message: `no product to delete with id ${id}`})
    }
})
// app.delete('/api/v1/products/:id', async(req, res) =>{
//     try {
//         const {id} = req.params
//        const products = await Product.findByIdAndDelete({id});
//        if(!products){
//         return res.status(404).json({message: `no product to delete with id ${id}`})
//        }
//        const deleteProduct = await Product.findById({id})
//        res.status(200).json({success: true,products: deleteProduct})
//     } catch (error) {
//         res.status(500).json({message: error.message}) 
//     }
// })


app.get('/api/v1/signups', async(req, res) => {

    try {
        const csignUp = await SignUp.find({})
        res.status(200).json(csignUp)
        
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})


app.post('/api/v1/signups', async(req, res) =>{
    try{
        const csignUp = await SignUp.create(req.body)
        res.status(200).json(csignUp)

    }catch(err){
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
    console.log(res.body)
    res.send(res.body)
})

//app.use('/api/v1/foods', foods)
//console.log('/api/v1/foods', foods)
// app.get('/api/v1/foods', )
// app.post('/api/v1/foods/profile', )
// app.get('/api/v1/foods/:id', )
// app.patch('/api/v1/foods/:id', )
// app.delete('/api/v1/foods:id', )


const port = 3000
//mongoose.set("strictQuery", false)
connection();
mongoose.
connect('mongodb+srv://admin:admin100@foodapi100.rqjahq8.mongodb.net/FoodApis?retryWrites=true&w=majority')
.then(() => {
    app.listen(port, () => {
        console.log(`listening on ${port}.. `)
      })
    console.log('mongoose is connected bro, now getout')
}).catch((error) => {
  console.log(error)
})