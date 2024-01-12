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

//add six new albums to collection
let album0 = addToCollection(myCollection, 'Hot Space', 'Queen', 1982);
console.log('first album:', album0);
let album1 = addToCollection(myCollection, 'Back to Black', 'Amy Winehouse', 2006);
console.log('second album:', album1);
let album2 = addToCollection(myCollection, 'Relayer', 'Yes', 1974);
console.log('third album:', album2);
let album3 = addToCollection(myCollection, 'Tragic Kingdom', 'No Doubt', 1995);
console.log('fourth album:', album3);
let album4 = addToCollection(myCollection, 'Cat in the Hat', 'Bobby Caldwell', 1991);
console.log('fifth album:', album4);
let album5 = addToCollection(myCollection, 'The King of Limbs', 'Radiohead', 2011);
console.log('sixth album:', album5);

//console log myCollection array
console.log('my music collection:', myCollection);


//create function showCollection
function showCollection (collection) {
  for (let variable of collection) {
    console.log(`${variable.title} by ${variable.artist} published in ${variable.yearPublished}`);
  }
} //end function
  
//test showCollection function
showCollection(myCollection);

//created findByArtist function
function findByArtist (collection, artist) {
let resultMatch = [];
for (let i of collection) {
  let albumYear = collection.yearPublished;
  if (artist===myCollection.artist && albumYear===myCollection.yearPublished) {
    resultMatch.push(albumYear, artist);
    return resultMatch;
  } else {
    return ('empty array-no match');
    }
  }
}

findByArtist(myCollection, 'Queen');




















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
