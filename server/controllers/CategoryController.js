import Category from "../models/CategorySchema.js";

const createCategory = async(req,res) => {
    try {
        const { name, itemCount } = req.body;

        if(!name || !req.file || !itemCount){
            throw new Error("All Fields Are Required!");
        }

        const category = new Category({
            name,
            image: req.file.path,
            itemCount
        });
        await category.save();

        return res.status(201).json({ success: true, message: "Category Added" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

const getAllCategories = async(req,res) => {
    try {
        const categories = await Category.find({});

        if(!categories){
            throw new Error("Error Fetching Categories");
        }
        return res.status(201).json({ success: true, message: "Categories Fetched", categories });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

const updateCategory = async(req,res) => {
    try {
        const { id } = req.params;

        if(!id){
            throw new Error("Category Id is Required!");
        }

        const category = await Category.findByIdAndUpdate(id, req.query);

        if(!category){
            return res.status(404).json({ success: false, message: "Invalid Category Id" });
        }

        const updatedCategory = await Category.findById(id);

        return res.status(200).json({ success: true, message: "Category Updated", updatedCategory });
        
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

export { createCategory, getAllCategories, updateCategory };