<template>
  <div class="page-container">

    <main class="main-content">
      <h1 class="main-title">¿Quiénes somos?</h1>
      <h2 class="subtitle">Apasionados. Creativos.</h2>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
        dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna.
      </p>
      <div class="video-container">
        <img src="http://googleusercontent.com/file_content/1" alt="Universidad Nacional Mayor de San Marcos" class="video-thumbnail" />
        <div class="play-button">
          <svg viewBox="0 0 24 24" fill="currentColor" class="play-icon">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
};
</script>

<style scoped>
.page-container {
  font-family: Arial, sans-serif;
  background-color: #f7f3ed; /* Light beige background */
  min-height: 100vh; /* Changed from calc(100vh - 80px) to occupy full viewport height */
  padding: 100px 20px 20px 20px; /* Added padding for top and bottom */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px; /* Space between header and main content */
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2em;
  color: #333;
}

.logo-icon {
  width: 24px; /* Placeholder size */
  height: 24px; /* Placeholder size */
  margin-right: 8px;
  /* In a real app, replace with your actual logo image */
}

.navigation {
  display: flex;
  gap: 30px;
}

.nav-item {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
}

.nav-item.active {
  color: #333;
  font-weight: bold;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4CAF50; /* Example accent color */
}

.header-icons .icon {
  width: 24px;
  height: 24px;
  margin-left: 15px;
  cursor: pointer;
  /* In a real app, replace with actual SVG icons */
}

.main-content {
  width: 80%;
  max-width: 900px;
  text-align: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  /* margin-top removed as margin-bottom is in header now */
}

.main-title {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 10px;
  background-color: #ffe082; /* Highlight color */
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
}

.subtitle {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 30px;
}

.description {
  color: #777;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: left; /* Align description text left as in the image */
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #f0f0f0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area */
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
}

.play-icon {
  width: 40px;
  height: 40px;
  color: #fff;
  margin-left: 5px; /* Adjust for triangular shape */
}
</style>