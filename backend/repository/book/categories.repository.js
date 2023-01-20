const Book = require("../../models/Book.model");

const getCat = async () => {
  
 let Phy11 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 11 Physics"}}])
 let Phy12 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 12 Physics"}}])
 let Chem11 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 11 Chemistry"}}])
 let Chem12 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 12 Chemistry"}}])
 let Mat11 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 11 Maths"}}])
 let Mat12 = await Book.aggregate([{$unwind:"$tags"},{$match: {tags:"Class 12 Maths"}}])
 let categories = {
      Class_11_Physics: Phy11,
      Class_12_Physics : Phy12,
      Class_11_Chemistry : Chem11,
      Class_12_Chemistry : Chem12,
      Class_11_Maths : Mat11,
      Class_12_Maths :Mat12
  }
  return categories
};

module.exports = {
  getCat,
};