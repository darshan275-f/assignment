import express from "express";
import asyncHandler from "../utils/asyncHandler.utils.js";
import ApiError from "../utils/ApiError.utils.js";
const app=express();

const getBook=asyncHandler(async (req,res)=>{
    try{
    const {bookName} =req.query;
    if(!bookName){
        let message="Error : Please Enter the Book Name "
        res.render("./Error.ejs",{message});
    }
    const data1= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=20`);
    const data2=await data1.json();
    let bookDetails=data2.items;
    console.log(bookDetails[0].saleInfo);

    let newBookdetails=[];
    for(let i=0;i<bookDetails.length;i++){
            let price=0;
    if(bookDetails[i].saleInfo.saleability==='FOR_SALE'){
        price=bookDetails[i].saleInfo?.listPrice.amount;
    }
        let x = {
            title : bookDetails[i].volumeInfo.title,
            author:bookDetails[i].volumeInfo.authors,
            desc : bookDetails[i].volumeInfo.description,
            link : bookDetails[i].volumeInfo.infoLink,
            bookPrice:price
        }
        newBookdetails.push(x);

    }
    res.render("./book.ejs",{newBookdetails});
}
catch(Error){
    next(new ApiError(Error,500));
}
});
const getIndex=(req,res)=>{
    try{
    res.render("./index.ejs");
    }
    catch(Err){
        next(new ApiError(Err,500));
    }
}



export {getBook,getIndex}