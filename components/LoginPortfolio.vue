<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn-login">Login</button>
    </form>
    <p v-if="isAuthenticated" class="welcome-message">Welcome, {{ username }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
    };
  },
  methods: {
    login() {
      // Simulate a login process (replace with actual authentication logic)
      if (this.username === 'Hridhya' && this.password === 'Thuruthippillil4') {
        this.isAuthenticated = true;
        localStorage.setItem("Check", "true");
      } else {
        this.isAuthenticated = false;
        alert('Invalid credentials. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e3f4e3; /* Light green background color */
}

h1 {
  text-align: center;
  color: #007bff; /* Blue title color */
}

.login-form {
  background-color: #f0f7f0; /* Lighter green form background color */
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #007bff; /* Blue label color */
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn-login {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.welcome-message {
  text-align: center;
  margin-top: 20px;
  color: #007bff;
}
</style>
