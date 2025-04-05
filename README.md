# Portfolio Website Template

This is a modern, responsive portfolio website template built with HTML, CSS, and JavaScript. It's designed to help you showcase your skills, projects, and contact information in a professional manner.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Sections for About, Skills, Projects, and Contact
- Interactive navigation menu
- Contact form
- Social media links
- Fully customizable with CSS variables

## How to Customize

### 1. Personal Information

- **Name and Title**: Update the name and professional title in the hero section of `index.html`
- **About Me**: Modify the text in the About section to reflect your background and experience
- **Contact Information**: Update email, phone, and location in the Contact section
- **Social Media Links**: Replace the `#` placeholders in the social media links with your actual profile URLs

### 2. Skills

The skills section is divided into three categories: Frontend, Backend, and Tools. You can:

- Change the category names
- Add or remove skill items
- Change the icons (using Font Awesome classes)

### 3. Projects

For each project in the Projects section:

- Replace placeholder images with screenshots of your actual projects
- Update project titles, descriptions, and technology tags
- Add links to live demos and GitHub repositories

### 4. Styling

The website uses CSS variables for easy customization. In the `styles.css` file, you can modify:

- Color scheme (primary, secondary, text colors)
- Fonts
- Spacing
- Shadows
- Container widths
- And more

```css
:root {
  --primary-color: #5e3bee;
  --secondary-color: #6941c6;
  --text-dark: #282938;
  --text-light: #666666;
  --bg-light: #f5f5f5;
  --white: #ffffff;
  /* ... other variables */
}
```

### 5. Images

- Replace the profile image: Update the URL in the `.profile-img` class in CSS
- Replace project images: Update the `src` attributes in the project cards
- Replace the about section image

### 6. Form Functionality

The contact form is set up for demonstration purposes. To make it functional:

1. Set up a backend service (PHP, Node.js, or a form service like Formspree)
2. Update the form submission code in `script.js`

## File Structure

- `index.html` - Main HTML file
- `styles.css` - All styles and layout
- `script.js` - JavaScript for interactivity
- `README.md` - This guide

## Browser Compatibility

This template works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## Credits

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Poppins font
- [Placeholder.com](https://placeholder.com/) - Placeholder images for demo

## License

This template is free to use for personal and commercial projects.

## Base Version

This version of the portfolio website includes the following features:

- Dark Mode Toggle
- Project Filtering
- Downloadable Resume
- Blog Section
- Certifications Section
- GitHub Activity Chart
- Typing Animation
- Parallax Scrolling
- Custom 404 Page
- Project Image Gallery
- Music Player
- Contact Form Analytics

The Case Studies and Testimonials sections have been removed in this base version.

This base version serves as a foundation for further enhancements and customizations.

## Version Control & Maintenance Strategy

### Detailed Branching Strategy

#### Main Branches

- `master` (or `main`)

  - Production-ready code
  - Always stable and deployable
  - Protected branch (requires pull request)
  - Tagged with version numbers
  - Example: `v1.0.0`, `v1.1.0`

- `develop`
  - Integration branch for features
  - Contains latest delivered development changes
  - Base branch for feature development
  - May be unstable at times

#### Supporting Branches

1. **Feature Branches** (`feature/*`)

   - Branch from: `develop`
   - Merge back into: `develop`
   - Naming convention: `feature/feature-name`
   - Examples:
     - `feature/dark-mode`
     - `feature/contact-form`
     - `feature/blog-integration`

2. **Bugfix Branches** (`bugfix/*`)

   - Branch from: `develop`
   - Merge back into: `develop`
   - Naming convention: `bugfix/issue-description`
   - Examples:
     - `bugfix/mobile-menu`
     - `bugfix/form-validation`
     - `bugfix/performance-issue`

3. **Release Branches** (`release/*`)
   - Branch from: `develop`
   - Merge back into: `master` and `develop`
   - Naming convention: `release/v1.x.x`
   - Examples:
     - `release/v1.0.0`
     - `release/v1.1.0`

### Git Workflow Commands

#### Starting New Feature

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push feature branch
git push origin feature/your-feature-name
```

#### Bug Fix Process

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create bugfix branch
git checkout -b bugfix/issue-description

# Fix and commit
git add .
git commit -m "Fix: issue description"

# Push bugfix branch
git push origin bugfix/issue-description
```

#### Release Process

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create release branch
git checkout -b release/v1.x.x

# Make release changes
git add .
git commit -m "Release v1.x.x"

# Push release branch
git push origin release/v1.x.x

# After testing, merge to master
git checkout master
git merge release/v1.x.x
git tag -a v1.x.x -m "Release v1.x.x"
git push origin master --tags

# Merge back to develop
git checkout develop
git merge release/v1.x.x
git push origin develop

# Delete release branch
git branch -d release/v1.x.x
git push origin --delete release/v1.x.x
```

### Best Practices

1. **Branch Naming**

   - Use lowercase
   - Use hyphens for spaces
   - Be descriptive but concise
   - Include ticket/issue numbers if applicable

2. **Commit Messages**

   - Use present tense
   - Be descriptive
   - Reference issues/tickets
   - Format: `type: description`
   - Types: feat, fix, docs, style, refactor, test, chore

3. **Pull Requests**

   - Clear title and description
   - Reference related issues
   - Include screenshots for UI changes
   - Request reviews from team members
   - Keep PRs small and focused

4. **Code Review**
   - Review code before merging
   - Check for:
     - Code quality
     - Test coverage
     - Performance impact
     - Security concerns
     - Documentation updates

### Maintenance Schedule

#### Daily

- [ ] Pull latest changes from develop
- [ ] Review and respond to PR comments
- [ ] Update task status

#### Weekly

- [ ] Code review sessions
- [ ] Performance monitoring
- [ ] Security checks
- [ ] Dependency updates

#### Monthly

- [ ] Major version releases
- [ ] Analytics review
- [ ] Content updates
- [ ] Backup verification
- [ ] Documentation updates

---

Happy customizing! If you have any questions, feel free to reach out.
