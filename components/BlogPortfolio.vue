<template>
  <div class="blog-portfolio">
    <h1 class="portfolio-title">Blog Post Page</h1>

    <!-- Display the list of blogs -->
    <ul class="blog-list">
      <li v-for="(blog, index) in blogs" :key="index">
        <router-link :to="'/blog/' + blog.id" class="blog-link">{{ blog.title }}</router-link>
      </li>
    </ul>

    <!-- Admin functionality: Add, Edit, Update, Delete -->
    <div v-if="isAdminLoggedIn" class="admin-actions">
      <!-- Add Blog Form -->
      <form @submit.prevent="addBlog" class="blog-form">
        <h2>Add Blog</h2>
        <div class="form-group">
          <label for="newTitle">Title:</label>
          <input type="text" id="newTitle" v-model="newBlog.title" required />
        </div>
        <div class="form-group">
          <label for="newBody">Body Text:</label>
          <textarea id="newBody" v-model="newBlog.body" required></textarea>
        </div>
        <button type="submit" class="btn-primary">Create</button>
      </form>
    </div>

    <!-- Single Blog Details -->
    <div v-if="selectedBlog" class="blog-details">
      <h2 class="blog-title">{{ selectedBlogContent.title }}</h2>
      <p class="blog-body">{{ selectedBlogContent.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [], // Initialize as an empty array since we're not using sample blogs
      newBlog: { title: '', body: '' },
      selectedBlog: null, // Store the ID of the selected blog post
      isAdminLoggedIn: true, // Set to true when admin is logged in, false otherwise
    };
  },
  methods: {
    addBlog() {
      // Add a new blog to the list
      const newId = this.blogs.length + 1;
      this.blogs.push({ id: newId, ...this.newBlog });
      this.newBlog = { title: '', body: '' };
    },
  },
  computed: {
    // Computed property to find and return the selected blog post based on selectedBlog ID
    selectedBlogContent() {
      if (this.selectedBlog) {
        return this.blogs.find(blog => blog.id === this.selectedBlog);
      }
      return null;
    },
  },
};
</script>

<style scoped>
.blog-portfolio {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f7f0; /* Light green background color */
}

.portfolio-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  color: #007bff; /* Blue title color */
}

.blog-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.blog-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s;
}

.blog-link:hover {
  color: #0056b3;
}

.admin-actions {
  margin-top: 20px;
}

.blog-form {
  background-color: #e3f4e3; /* Lighter green form background color */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  color: #007bff; /* Blue label color */
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.blog-details {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #e3f4e3; /* Lighter green background color */
}

.blog-title {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #007bff; /* Blue title color */
}

.blog-body {
  font-size: 16px;
  line-height: 1.5;
}
</style>
