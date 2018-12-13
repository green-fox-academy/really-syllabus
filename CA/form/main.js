let users = [];

function getRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.addEventListener('error', () => alert('Something went wrong.'));
  xhr.open('GET', url);
  xhr.send();
}
function postRequest(url, form, callback) {
  let xhr = new XMLHttpRequest();
  let fd = new FormData(form);
  xhr.addEventListener('load', callback);
  xhr.addEventListener('error', () => alert('Something went wrong.'));
  xhr.open('POST', url);
  xhr.send(fd);
}

function getPostsAll() {
  getRequest('https://jsonplaceholder.typicode.com/posts', function() {
    let posts = JSON.parse(this.responseText);
    let postsDiv = document.querySelector('#posts');

    posts.forEach(post => {
      postsDiv.appendChild(createPost(post));
    });
  });
}

function createPost(post) {
  let postDiv = document.createElement('div');
  let titleAnchorElement = document.createElement('a');
  let titleElement = document.createElement('h3');
  let userElement = document.createElement('h5');
  let bodyElement = document.createElement('p');
  let commentsLink = document.createElement('a');
  let commentsDiv = document.createElement('div');

  postDiv.className = 'post';

  titleAnchorElement.name = `post-${post.id}`;
  titleElement.innerText = post.title;
  titleAnchorElement.appendChild(titleElement);
  postDiv.appendChild(titleAnchorElement);

  userElement.innerText = users.find( user => user.id === post.userId ).name;
  postDiv.appendChild(userElement);

  bodyElement.innerText = post.body;
  postDiv.appendChild(bodyElement);

  commentsLink.innerText = 'comments';
  commentsLink.href = `#post-${post.id}`;
  commentsLink.addEventListener('click', () => {
    if ( commentsDiv.style.display === 'none' ) {
      getCommentsByPostId(post.id);
      commentsDiv.style.display = 'block';
    }
    else {
      commentsDiv.style.display = 'none';
      commentsDiv.innerText = '';
    }
  });
  postDiv.appendChild(commentsLink);

  commentsDiv.id = `comments-${post.id}`;
  commentsDiv.className = 'comments';
  commentsDiv.style.display = 'none';
  postDiv.appendChild(commentsDiv);

  return postDiv;
}

function getCommentsByPostId(postId) {
  getRequest(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, function() {
    let comments = JSON.parse(this.responseText);
    let commentsDiv = document.querySelector(`#comments-${postId}`);

    comments.forEach(comment => {
      commentsDiv.appendChild(createComment(comment));
    });
  });
}

function createComment(comment) {
  let commentDiv = document.createElement('div');
  let titleElement = document.createElement('span');
  let userElement = document.createElement('span');
  let bodyElement = document.createElement('p');

  commentDiv.className = 'comment';

  titleElement.className = 'title';
  titleElement.innerText = comment.name;
  commentDiv.appendChild(titleElement);

  userElement.className = 'email';
  userElement.innerText = comment.email;
  commentDiv.appendChild(userElement);

  bodyElement.innerText = comment.body;
  commentDiv.appendChild(bodyElement);

  return commentDiv;
}

function getUsers(done) {
  getRequest('https://jsonplaceholder.typicode.com/users', function(event) {
    users = JSON.parse(this.responseText);
    done();
  });
}

window.onload = () => {
  getUsers(() => {
    getPostsAll();
  });

  document.querySelector('#sendButton').addEventListener('click', function() {
    postRequest('https://jsonplaceholder.typicode.com/posts', document.forms.postForm, function() {
      let post = JSON.parse(this.responseText);
      let postsDiv = document.querySelector('#posts')
      let postsDivFirstChild = postsDiv.firstChild;

      let form = document.forms.postForm;
      post = ((id,title,body,userId) => ({id,title,body,userId}))(post.id, form.title.value, form.body.value, 1);

      postsDiv.insertBefore(createPost(post), postsDivFirstChild);

      form.title.value = '';
      form.body.value = '';
    })
  });
}