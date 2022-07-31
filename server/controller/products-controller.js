import Product from "../model/product-model.js"

export const addingproducts = async (req, res) => {

    try {
        const name = req.body.name;
        const description = req.body.description;
        const quantity = Number(req.body.quantity);
        const price = Number(req.body.price);

        const newProduct = new Product({
            name,
            description,
            quantity,
            price,

        });

        await newProduct.save()
        res.status(200).json(newProduct)

    } catch (err) {
        res.status(401).json({ message: err })
    }

}

export const getallproducts = async (req, res) => {

    try {
        const response =await Product.find({})
        res.status(200).json(response)

    } catch (err) {
        res.status(400).json({ message: err })
    }

}
export const editingproducts = async (req, res) => {

    try {
        const response =await Product.findById(req.params.id)
        res.status(200).json(response)

    } catch (err) {
        res.status(400).json({ message: err })
    }

}
export const deleteproducts = async (req, res) => {

    try {
        const response =await Product.findOneAndDelete({_id: req.params.id})
        res.status(200).json(response)

    } catch (err) {
        res.status(400).json({ message: err })
    }

}
export const updateproduct = async (req, res) => {

    try {
        let response = await Product.findByIdAndUpdate(req.params.id, { $set: req.body });
          await response.save()
        res.status(200).json(response)

    } catch (err) {
        res.status(400).json({ message: err })
    }

}

