<template>
  <div class="resume-portfolio">
    <div class="background-img"></div>
    <div class="content">
      <header class="header">
        <h1 class="name">{{ fullName }}</h1>
        <p class="contact-info">{{ address }}</p>
        <p class="contact-info">Tel: {{ phoneNumber }}</p>
        <p class="contact-info">Email: {{ email }}</p>
        <p class="contact-info">
          LinkedIn: <a :href="linkedin">{{ linkedin }}</a>
        </p>
        <p class="career-summary">{{ careerSummary }}</p>
      </header>

      <!-- Education -->
      <section class="section green">
        <h2 class="section-title">Education</h2>
        <p>
          <strong>Bachelor of Computer Science</strong><br />
          Deakin University, Burwood<br />
          July 2022 - Present
        </p>
        <p>
          <strong>Higher Secondary Education</strong><br />
          Kuriakose Elias Higher Secondary School, Kottayam, Kerala<br />
          July 2020 - July 2022
        </p>
        <ul>
          <li>School Head Girl, conducted and represented inter-school events</li>
          <li>National Talent Search Examination: high-rank achiever</li>
          <li>International Mathematics Olympiad: Rank 12</li>
        </ul>
        <p>
          <strong>Secondary Education</strong><br />
          Vimalagiri International School, Ernakulam, Kerala<br />
          July 2019 - July 2020
        </p>
      </section>

      <!-- Experience -->
      <section class="section green">
        <h2 class="section-title">Experience</h2>
        <p>
          <strong>Specialist Clinic Clerk</strong><br />
          Acute Specialist Clinic, Eastern Health, Box Hill Hospital<br />
          September 2023 - Present
        </p>
        <!-- Add more experience items here -->
      </section>

      <!-- Volunteering Experience -->
      <section class="section green">
        <h2 class="section-title">Volunteering Experience</h2>
        <p>
          <strong>Treasurer</strong><br />
          Deakin Dancers United, Deakin University, Victoria<br />
          September 2023 - Present
        </p>
        <!-- Add more volunteering experience items here -->
      </section>

      <!-- Technical Skills -->
      <section class="section green">
        <h2 class="section-title">Technical Skills</h2>
        <p>{{ technicalSkills }}</p>
      </section>

      <!-- Certifications and Training -->
      <section class="section green">
        <h2 class="section-title">Certifications and Training</h2>
        <p>{{ certificationsAndTraining }}</p>
      </section>

      <footer>
        <section class="section green">
          <h2 class="section-title">Contact Me</h2>
          <p class="contact-info">{{ address }}</p>
          <p class="contact-info">Phone: {{ phoneNumber }}</p>
          <p class="contact-info">Email: {{ email }}</p>
        </section>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "Hridhya Thuruthippillil Shibu",
      address: "13 Peacock Street, Burwood, Victoria, 3125",
      phoneNumber: "0476117192",
      email: "hridhyatshibuh4.com",
      linkedin: "linkedin.com/in/hridhyatshibuh4",
      careerSummary:
        "A young and enthusiastic mind prepared to confront emerging challenges, actively engaged in uncovering and analyzing new avenues within Data Science. Proficient in juggling multiple tasks and adeptly managing high-pressure scenarios, my experiences span diverse sectors including medical, entertainment, retail, and IT industries.",
      technicalSkills:
        "Programming Languages: C++, Python\nWeb Development: HTML, CSS\nMedical Software: Best-Practice Software, IPM",
      certificationsAndTraining:
        "Data Science and Machine Learning Internship Program (Edureka)\nSeptember 2022 - March 2023",
    };
  },
};
</script>

<style scoped>
<style scoped>
.resume-portfolio {
  position: relative;
  background-color: #000; /* Set background color to black */
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  overflow: hidden; /* Hide overflow content */
}

.profile-pic {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  background-image: url('dp.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
  border: 2px solid #fff; /* Add a white border */
}

.content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  text-align: justify;
}


.header {
  animation: fadeInDown 1s ease-in-out;
}

.header h1 {
  font-size: 2.5rem;
}

.contact-info {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.contact-info a {
  color: #07f;
  text-decoration: none;
  font-weight: bold;
}

.career-summary {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 20px;
}

.section-title {
  font-size: 1.8rem;
  margin-top: 40px;
}

.section {
  animation: fadeInUp 1s ease-in-out;
}

.green {
  background-color: rgba(0, 128, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
