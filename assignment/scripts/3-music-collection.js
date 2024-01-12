console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

//create function addToCollection
function addToCollection (collection, title, artist, yearPublished) {
  
//create album object with required parameters
  const album = {title, artist, yearPublished};
  collection.push(album);
  return album; 
} //end function


//test addToCollection function
addToCollection(myCollection, 'Hot Space', 'Queen', 1982);
addToCollection(myCollection, 'Relayer ', 'Yes', 1974);
addToCollection(myCollection, 'Back to Black', 'Amy Winehouse', 2006);
addToCollection(myCollection, 'Mamas Gun', 'Erykah Badu', 2000);
addToCollection(myCollection, 'Cat in the Hat', 'Bobby Caldwell', 1991);
addToCollection(myCollection, 'The King of Limbs', 'Radiohead', 2011);


console.log('my music collection:', myCollection);
console.log(myCollection);

//create function showCollection
//function showCollection (collection) {
  for (variable of collection) {
    
  }
  console.log()



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
