module.exports = {

    getProducts: (req,res) => {
        req.app.get('db').get_products().then( products => {
             res.json({ products: products  })
        }).catch(error => {
            res.json({ message:'Oh no an error occured!!!'})
        })
    },













}