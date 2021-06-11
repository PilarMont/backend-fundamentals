var cowsay = require("cowsay");
console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
const fortune = require('fortune') // Works in web browsers, too.
 
const store = fortune({
  user: {
    name: String,
 
    // Following and followers are inversely related (many-to-many).
    following: [ Array('user'), 'followers' ],
    followers: [ Array('user'), 'following' ],
 
    // Many-to-one relationship of user posts to post author.
    posts: [ Array('post'), 'author' ]
  },
  post: {
    message: String,
 
    // One-to-many relationship of post author to user posts.
    author: [ 'user', 'posts' ]
  }
})
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));