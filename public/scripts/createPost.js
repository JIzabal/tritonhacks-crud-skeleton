const REPLACE_ID = 'Replace this with the id of the post';
const REPLACE_TITLE = 'Replace this with the title of the post';
const REPLACE_SUMMARY = 'Replace this with the summary of the post';

/**
 * Creates a post from the values filled in on the form and adds it to the page
 */
function createPost() {

    // You can get rid of this console.log statement once you've set the
    // event listener correctly
    console.log('You set the event listener correctly!!!');

    // TODO: Select the id "post-list" - we will append all new posts to this list
    const postList; 

    // TODO: Collect the values from the form and store them in an 
    // object literal to represent a post
    let post = {
        id: (new Date().getTime()).toString(),
        title: REPLACE_TITLE,
        summary: REPLACE_SUMMARY
    };

    // TODO: Clear the form entries so they don't have the previous input
    
    /* 
     * TODO: Create HTML for the post by passing in post object created earlier
     * as a parameter to the createPostHTML function. Make sure to implement
     * the createPostHTML function now before moving on
     */

    // TODO: Add the HTML for the post that was created in the createPostHTML
    // function into the ul tag in index.html
    postList;

    /* 
     * TODO: Save the post to local storage by passing in the post object as 
     * a parameter to the save function
     * DON'T DO UNTIL SPECIFIED IN THE WRITE-UP
     */
}

/**
 * This is the template HTML for a blog post, and all that needs to be done
 * is filling in the id, title, and summary for a post.
 * @param {object} post - The post to translate into HTML
 * @returns {string} HTML representing the post passed in
 */
function createPostHTML(post) {

    // TODO: Replace the inside of each ${} with the correct values described
    let postHTML = 
        `<li id="${REPLACE_ID}">
            <h2>${REPLACE_TITLE}</h2>
            <p>${REPLACE_SUMMARY}</p>
            <br>
            <button onclick="updatePost(this)">Edit</button>
            <button onclick="deletePost(this)">Delete</button>
        </li>`;

    return postHTML;
}

/**
 * Saves a post object to local storage
 * @param {object} post - The post contents to save
 */
function savePost(post) {

    // TODO: Grab the posts array from local storage

    // TODO: Do a null check. If the posts array is null, then set to an empty 
    // array. Otherwise, the posts array exists and you can continue 

    // TODO: Add the passed in post parameter to the array

    // TODO: Update local storage with the new array (Since a post was added)
}

export { createPost, createPostHTML };