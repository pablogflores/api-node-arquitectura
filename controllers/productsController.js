const Products = require('../models/Products');

//primera acción: list

exports.list = async(req,res) =>{
    try{
    const products = await Products.find({}); //Buscar todo los productos
    res.json(products); //devolver en formato json 
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
}

//Agregar Producto
exports.add = async(req,res) =>{
    const products = new Products(req.body);

    try {
        await products.save();
        res.json({message: 'Nuevo producto agregado'});
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
        
    }

}
//leer  Producto por id
exports.show = async (req,res, next) =>{
    try {
        const products = await Products.findById(req.params.id);
        if(!products){
           res.status(404).json({
            massager: 'El producto no existe'
           });
        }
        res.json(products);

    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
    }
}
//Actualizar  Producto
exports.update = async (req, res, next) => {
    try {
        const products = await Products.findOneAndUpdate(
        { _id: req.params.id } ,
        req.body,
        {new: true}
    );
    res.json({
        massager: 'Se actualizo el producto'
    });   
    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
        
    }
}

//Eliminar Producto

exports.delete = async (req, res, next) => {
    try {
        await Products.findOneAndDelete({_id: req.params.id });
        res.json({massager: 'El Producto ha sido eliminado'});
    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
        
    }
}