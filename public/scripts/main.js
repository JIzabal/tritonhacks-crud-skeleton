import { createPost } from './createPost.js';
import { readPosts } from './readPosts.js';

function init() {

    // TODO: First, select the form button. Then, add an event listener to it
    // that calls the createPost function when the button is clicked.
    
    readPosts();
}

document.addEventListener('DOMContentLoaded', init);