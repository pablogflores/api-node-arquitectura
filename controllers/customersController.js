const Customers = require('../models/Customers');

//primera acción: list

exports.list = async(req,res) =>{
    try{
    const customers = await Customers.find({}); //Buscar todo los clientes
    res.json(customers); //devolver en formato json 
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
}

//Agregar Cliente
exports.add = async(req,res) =>{
    const customer = new Customers(req.body);

    try {
        await customer.save();
        res.json({message: 'Nuevo cliente agregado'});
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
        
    }

}
//leer  Cliente por id
exports.show = async (req,res, next) =>{
    try {
        const customer = await Customers.findById(req.params.id);
        if(!customer){
           res.status(404).json({
            massager: 'El cliente no existe'
           });
        }
        res.json(customer);

    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
    }
}
//Actualizar  Cliente
exports.update = async (req, res, next) => {
    try {
        const customer = await Customers.findOneAndUpdate(
        { _id: req.params.id } ,
        req.body,
        {new: true}
    );
    res.json({
        massager: 'Se actualizo el cliente'
    });   
    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
        
    }
}

//Eliminar Cliente

exports.delete = async (req, res, next) => {

    try {
        await Customers.findOneAndDelete({_id: req.params.id });
        res.json({massager: 'El Cliente ha sido eliminado'});
    } catch (error) {
        res.status(400).json({
            massager: 'Error al procesar la petición'
           });
        
    }
}