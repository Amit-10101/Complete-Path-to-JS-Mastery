// Asynchronous JavaScript

// setInterval
// it will run the function after every interval of time
// clearInterval
// it will stop the setInterval function
const myInterval = setInterval(() => console.log('Hello World'), 1000);
clearInterval(myInterval);

// setTimeout
// it will wait for a certain amount of time and then run the function
// clearTimeout
// it will stop the setTimeout function
const myTimeout = setTimeout(() => console.log('Hello World'), 5000);
clearTimeout(myTimeout);

// What is Synchronous JavaScript?
// -Synchronous JavaScript means that, only one operation can be in progress at a time.
// -Synchronous JavaScript is one in which the code is executed line by line, and their tasks are completed instantly, i.e., there is no time delay in the completion of the tasks for those lines of code.

// What is Asynchronous JavaScript?
// -Asynchronous JavaScript means that multiple operations can be in progress at a time.
// -Asynchronous JavaScript is one in which the code is executed not in the order it appears. It is executed in the order in which it is completed. It is also known as non-blocking JavaScript.
// -like waiting for timeouts, waiting for data from an API, etc.

const functionOne = () => {
	console.log('Function One'); // 1

	functionTwo();

	console.log('Function One, Part 2'); // 2
};

const functionTwo = () => {
	clearTimeout(setTimeout(() => console.log('Function Two'), 2000)); // 3
};

functionOne();
console.log('\n');

// Function One
// Functino One, Part 2
// (after two second delay)
// Function Two
// Remember to remove clearTimeout() for testing the function, and add it back after testing.

// Data Fetching
// API - Application Programming Interface

// const fetchUser = (username) => {
// 	setTimeout(() => {
// 		return { user: username };
// 	}, 2000); // we dont know the time, but let's say 2000
// };

// const user = fetchUser('test');
// console.log(user); // undefined

// ----------------------------------------------------------------------------------------------

// const fetchUser = (username, callback) => {
// 	console.log('Fetching...');
// 	setTimeout(() => {
// 		console.log('[Now we have the user]');

// 		callback({ username: username });
// 	}, 2000);
// };

// const fetchUserPhotos = (username, callback) => {
// 	setTimeout(() => {
// 		console.log(`[Now we have the photos for ${username}]`);

// 		callback(['photo1', 'photo2']);
// 	}, 2000);
// };

// const fetchPhotoDetails = (photo, callback) => {
// 	setTimeout(() => {
// 		console.log('[Now we have the photo details]');

// 		callback('details...');
// 	}, 2000);
// };

// // Callback Hell - Pyramid of Doom - Christmas Tree Problem, becomes unreadable
// const user = fetchUser('AK', (user) => {
// 	console.log(user);
// 	fetchUserPhotos(user.username, (photos) => {
// 		console.log(`Your photos are: ${photos}`);

// 		fetchPhotoDetails(photos[0], (details) => {
// 			console.log(details);
// 		});
// 	});
// });
// console.log('\n');

// ---------------------------------------------------------------------------------------------

// Promises
// -Promises are used to handle asynchronous operations in JavaScript.
// -They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// -A promise has four states:
// 1. fulfilled: Action related to the promise succeeded
// 2. rejected: Action related to the promise failed
// 3. pending: Promise is still pending i.e not fulfilled or rejected yet
// 4. settled: Promise has fulfilled or rejected

// const fetchUser = (username) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Now we have the user');

// 			resolve(username);
// 		}, 2000);
// 	});
// };

// const fetchUserPhotos = (username) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Now we have the photos');

// 			resolve(['photo1', 'photo2']);
// 		}, 2000);
// 	});
// };

// const fetchPhotoDetails = (photo) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('Now we have the photo details');

// 			resolve('details...');
// 		}, 2000);
// 	});
// };

// fetchUser('Michael')
// 	.then((user) => fetchUserPhotos(user))
// 	.then((photos) => fetchPhotoDetails(photos[0]))
// 	.then((detail) => console.log(detail));

// ---------------------------------------------------------------------------------------------

// Async/Await
// -Async/await is a new way to write asynchronous code. It is built on top of promises, it is not a separate entity.
// -Async/await is actually just syntax sugar built on top of promises. It cannot be used with plain callbacks or node callbacks.
// -Async/await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.
// -Async/await is, like promises, non blocking.
// -ASYNC FUNCTION ALWAYS RETURNS A PROMISES!!!
// -AWAIT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION!!!

const fetchUser = (username) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Now we have the user');

			resolve(username);
		}, 2000);
	});
};

const fetchUserPhotos = (username) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Now we have the photos for ${username}`);

			resolve(['Photo 1', 'Photo 2']);
		}, 2000);
	});
};

const fetchPhotoDetails = (photo) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Now we have the photo details for ${photo}`);

			resolve('Details...');
		}, 2000);
	});
};

const displayData = async () => {
	const user = await fetchUser('AK');
	console.log(user); // AK

	const photos = await fetchUserPhotos(user);
	console.log(photos); // ['Photo 1', 'Photo 2']

	const detail = await fetchPhotoDetails(photos[0]);
	console.log(detail); // Details...
};

displayData();
