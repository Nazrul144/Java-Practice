// Insert, delete array elements of array using splice.

let books = ['Bangla', 'English', 'Math', 'Physics','Chemistry', 'Biology','Sociology','Software Engineering','Networking'];
console.log(books);

//Removing English, Math, Physics from array.
books.splice(1,3);
console.log(books);

// Now inset Java, Algorithm, Data Structure, in that position.

books.splice(1,3, 'Java', 'Algorithm', 'Data Structure');

console.log(books);