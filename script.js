// DOM Elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const header = document.querySelector("header");
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const typingText = document.querySelector(".typing-text");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const galleryBtns = document.querySelectorAll(".gallery-btn");
const galleryModal = document.getElementById("gallery-modal");
const galleryTitle = document.getElementById("gallery-title");
const galleryImages = document.getElementById("gallery-images");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const closeModal = document.querySelectorAll(".close-modal");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevTestimonial = document.getElementById("prev-testimonial");
const nextTestimonial = document.getElementById("next-testimonial");
const testimonialDots = document.querySelectorAll(".dot");
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");
const githubChartModal = document.getElementById("github-chart-modal");
const scrollElements = document.querySelectorAll(
  ".skill-category, .project-card, .about-image"
);

// Navigation menu functionality
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger animation
  burger.classList.toggle("toggle");
});

// Close mobile menu when clicking on a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");

    navLinks.forEach((link) => {
      link.style.animation = "";
    });
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    header.style.height = "4.5rem";
  } else {
    header.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 0.1)";
    header.style.height = "5rem";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Theme switcher
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Typing effect
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  window.addEventListener("load", typeWriter);
}

// Project filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";

        // Re-trigger animation
        setTimeout(() => {
          card.classList.add("scrolled");
        }, 100);
      } else {
        card.style.display = "none";
        card.classList.remove("scrolled");
      }
    });
  });
});

// Project gallery functionality
const projectGalleries = {
  project1: [
    "https://via.placeholder.com/1000x600?text=Project+1+Image+1",
    "https://via.placeholder.com/1000x600?text=Project+1+Image+2",
    "https://via.placeholder.com/1000x600?text=Project+1+Image+3",
  ],
  project2: [
    "https://via.placeholder.com/1000x600?text=Project+2+Image+1",
    "https://via.placeholder.com/1000x600?text=Project+2+Image+2",
    "https://via.placeholder.com/1000x600?text=Project+2+Image+3",
  ],
  project3: [
    "https://via.placeholder.com/1000x600?text=Project+3+Image+1",
    "https://via.placeholder.com/1000x600?text=Project+3+Image+2",
    "https://via.placeholder.com/1000x600?text=Project+3+Image+3",
  ],
};

let currentProject = "";
let currentImageIndex = 0;

function showGallery(project) {
  currentProject = project;
  currentImageIndex = 0;

  // Set gallery title based on project
  switch (project) {
    case "project1":
      galleryTitle.textContent = "E-Commerce Platform Gallery";
      break;
    case "project2":
      galleryTitle.textContent = "Task Management App Gallery";
      break;
    case "project3":
      galleryTitle.textContent = "Weather Dashboard Gallery";
      break;
    default:
      galleryTitle.textContent = "Project Gallery";
  }

  updateGalleryImage();
  galleryModal.style.display = "block";
}

function updateGalleryImage() {
  const imageUrl = projectGalleries[currentProject][currentImageIndex];
  galleryImages.innerHTML = `<img src="${imageUrl}" alt="Project gallery image">`;
}

function nextImage() {
  currentImageIndex =
    (currentImageIndex + 1) % projectGalleries[currentProject].length;
  updateGalleryImage();
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + projectGalleries[currentProject].length) %
    projectGalleries[currentProject].length;
  updateGalleryImage();
}

galleryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = btn.getAttribute("data-project");
    showGallery(project);
  });
});

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Close modals
closeModal.forEach((close) => {
  close.addEventListener("click", () => {
    galleryModal.style.display = "none";
    githubChartModal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === galleryModal) {
    galleryModal.style.display = "none";
  }
  if (e.target === githubChartModal) {
    githubChartModal.style.display = "none";
  }
});

// Testimonials carousel
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card) => card.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialCards[index].classList.add("active");
  testimonialDots[index].classList.add("active");
  currentTestimonial = index;
}

function nextTestimonialSlide() {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonialSlide() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonialCards.length) %
    testimonialCards.length;
  showTestimonial(currentTestimonial);
}

if (prevTestimonial && nextTestimonial) {
  prevTestimonial.addEventListener("click", prevTestimonialSlide);
  nextTestimonial.addEventListener("click", nextTestimonialSlide);

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  // Auto slide testimonials
  setInterval(() => {
    nextTestimonialSlide();
  }, 5000);
}

// Background music player
let isMusicPlaying = false;

if (musicToggle && backgroundMusic) {
  musicToggle.addEventListener("click", () => {
    if (isMusicPlaying) {
      backgroundMusic.pause();
      musicToggle.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      backgroundMusic.volume = 0.2; // Set low volume
      backgroundMusic.play().catch((error) => {
        console.log("Auto-play prevented by browser:", error);
      });
      musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }

    isMusicPlaying = !isMusicPlaying;
  });
}

// Form submission and analytics
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // For demo purposes, log the data
    console.log("Form submission:", { name, email, subject, message });

    // Track form submission (demo analytics)
    trackFormSubmission();

    // Show success message
    contactForm.style.display = "none";
    formSuccess.style.display = "flex";

    // Reset form
    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = "block";
      formSuccess.style.display = "none";
    }, 3000);
  });
}

// Mock analytics tracking function
function trackFormSubmission() {
  console.log("Analytics: Form submission tracked");
  // In a real implementation, this would send data to Google Analytics, etc.
}

// GitHub chart functionality
document
  .querySelector(".footer-social a:first-child")
  .addEventListener("click", function (e) {
    e.preventDefault();
    githubChartModal.style.display = "block";

    // Mock GitHub data loading
    setTimeout(() => {
      document.getElementById("github-loading").style.display = "none";

      const chartContainer = document.getElementById("github-chart");
      chartContainer.innerHTML = `
            <div class="github-chart-wrapper">
                <div class="contribution-graph">
                    ${generateMockContributionGraph()}
                </div>
                <div class="chart-stats">
                    <div class="stat-item">
                        <h4>1,204</h4>
                        <p>Contributions in the last year</p>
                    </div>
                    <div class="stat-item">
                        <h4>42</h4>
                        <p>Repositories</p>
                    </div>
                    <div class="stat-item">
                        <h4>156</h4>
                        <p>Pull Requests</p>
                    </div>
                </div>
            </div>
        `;
    }, 1500);
  });

// Generate a mock GitHub contribution graph
function generateMockContributionGraph() {
  let graph = '<div class="contribution-cells">';

  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 7; j++) {
      const intensity = Math.floor(Math.random() * 5);
      graph += `<div class="contribution-cell level-${intensity}"></div>`;
    }
  }

  graph += "</div>";
  return graph;
}

// Animate elements on scroll
const elementInView = (el, scrollOffset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

// Parallax scroll effect
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;

  // Apply parallax effect to sections with parallax class
  document.querySelectorAll(".parallax").forEach((section) => {
    const speed = section.getAttribute("data-speed") || 0.5;
    section.style.transform = `translateY(${scrollPosition * speed}px)`;
  });

  handleScrollAnimation();
});

// Add scroll event listener
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Run once on page load
window.addEventListener("load", () => {
  handleScrollAnimation();

  // Set a custom 404 page for invalid links
  document.querySelectorAll('a[href="#404"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.innerHTML = document.getElementById("error-page").innerHTML;
    });
  });
});
