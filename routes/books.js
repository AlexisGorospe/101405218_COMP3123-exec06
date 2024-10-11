const express = require("express")
const BookModel = require("../models/books")
//const Book = require("../models/books")

const routes = express.Router()

//Get All Books
routes.get("/books", async (req, res) => {
    //get all books from mongodb
    try{
        const books_list = await BookModel.find();
        res.json(books_list).exec();
    }
    catch (err){
        res.status(200);
        console.log("whoopsies");
    }
    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const book = new BookModel(req.body)
    
    try{
        await book.save();
        res.send(book);
    }
    catch (err){
        res.status(500).send(err);
    }

    //res.send({message: "Add NEW Book"})
})

//Update existing Book By Id
routes.post("/book/:bookid", async (req, res) => {
    try{
        const bookID = req.params.bookid;
        const book = await Book.findByIdAndUpdate(bookID, {title: "A", author: "B", price: 1, rating: 2});
        if (!book){
            res.status(404).send("no book found");
        }
        else{
            res.status(200).send();
            console.log("book updated");
        }
    }
    catch{
        console.error("error updating book: " + err);
        res.status(500).json({message: "internal server error"})
    }
    //res.send({message: "Update existing Book By Id"})
});

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    try{
        const book = await BookModel.findByIdAndDelete(req.params.bookid); 
        //we make a boolean value that tells us if the book exists. 
        //if false, it's gone.

        if(!book){
            res.status(400).send("book not found");
        }
        else{
            res.status(200).send("book deleted");
            console.log("book deleted");
        }

    }catch(err){
        res.status(500).send(err)
    }


    //res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    try{
        const book = await BookModel.findById(req.params.bookid); 
        res.json(book);
    }
    catch (err){
        /*console.error("error fetching book: ", err);
        res.status(500).json({message: "internal server error"});*/
        console.log("oops")
        res.send({message: "internal server error"})
    }
    
    
})

//Get All Books in sorted order
routes.get("/books/sort", async (req, res) => {
    try{
        const books_list = await BookModel.find().sort({id: 1});
        res.json(books_list).exec();
    }
    catch (err){
        res.status(200);
        console.log("whoopsies");
    }
    
    //res.send({message: "Get All Books in sorted order"})
})

module.exports = routes

//this was made using a combination of recordings and lectures.