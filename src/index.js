import $ from 'jquery/dist/jquery.slim';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const el = $('<pre />');

class Blog {
  users = [];
  posts = [];
  comments = [];

  async getUsers() {
    this.users = await this.fetch('/users');
  }

  async getPosts() {
    this.posts = await this.fetch('/posts');
  }

  async getComments() {
    this.comments = await this.fetch('/comments');
  }

  async fetch(url) {
    const result = await window.fetch(`${baseUrl}${url}`);
    return await result.json();
  }

  toString() {
    return JSON.stringify(this, null, 2)
  }
}

(async function(){
  const blog = new Blog(el);
  await Promise.all([
    blog.getUsers(),
    blog.getPosts(),
    blog.getComments()
  ]);

  el.text(blog);
})();

$(() => $('body').append(el));

