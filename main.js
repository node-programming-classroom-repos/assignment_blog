/*
Det är ok att använda den här filen i din lösning.

scriptet ska "köra" din lösningen inklusive testutskrifter av objekten.
*/

const User = require("./User");


// Exempeldata
const user1 = new User("Alice", "alice@email.com", "password123");
const user2 = new User("Bob", "bob@email.com", "pass456");

const post1 = user1.createBlogPost("JavaScript Basics", "An introduction to JavaScript programming.");
//användare 2 lägger till en kommentar till användare 1 post
user2.addComment(post1, "Great post! I learned a lot.");

const post2 = user2.createBlogPost("Node.js: Getting Started", "Setting up a Node.js environment.");
user1.addComment(post2, "Nice tutorial. Looking forward to more!");

user1.displayInfo();
console.log("\nUser 1's Blog Posts:");
post1.displayPost();

user2.displayInfo();
console.log("\nUser 2's Blog Posts:");
post2.displayPost();
