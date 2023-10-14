console.log("page loading..."); // Log a message to the console when the page is loading

// Define an array 'likes' to store the number of likes for each post
var likes = [9, 12, 9];

// Define an array 'spans' to store references to HTML elements with IDs 'post-1', 'post-2', and 'post-3'
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

// Define a function 'like' that increments the like count for a specific post and updates the corresponding HTML element
function like(id) {
    likes[id]++; // Increment the like count for the specified post
    spans[id].innerHTML = likes[id] + " like(s)"; // Update the HTML content to display the updated like count
}
