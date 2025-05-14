# Ashiya - Portfolio  
## Get Started with Your Developer Portfolio · Part I

### Objective  
Build and deploy the first version of your personal developer portfolio using the skills you’ve learned so far. This initial version will showcase your projects, your skill set, and provide basic contact links.

---

### 1. Technology Stack  
- **HTML5** (semantic elements: `<header>`, `<section>`, `<footer>`, `<h1>`–`<h3>`, `<nav>`)  
- **CSS3**  
  - Originally suggested: *Bootstrap 5 for layout and components*  
  - **Used:** Tailwind CSS (to practice Tailwind instead of Bootstrap)  
- **JavaScript:** React  
- **Hosting:** Vercel  

---

### 2. Typography  
Choose one clean, web‑friendly font. Examples:  
- Inter  
- Roboto  
- Open Sans  

✅ Applied chosen font consistently across headings, body text, and buttons.

---

### 3. Page Structure  
Divide your portfolio into four clear sections, each wrapped in a `<section>` tag:

#### 3.1 Hero / Introduction  
- Custom hero section (in place of Bootstrap's Jumbotron)  
- Includes:
  - Name as an `<h1>`  
  - One‑line tagline or brief bio as `<h2>` or `<p>`  
  - Call‑to‑action button (e.g., “View My Work”)  

#### 3.2 Projects  
- Section heading: `<h2>`: **My Projects**  
- Intended layout: Bootstrap cards in a grid  
- Current approach:
  - Listed all technologies (not in badges)  
- Each project card includes:
  - Project Name (`<h3>`)  
  - Brief Description (`<p>`)  
  - Tech Pills: ⚠️ *Not yet in badge format*  
  - Buttons:
    - **View Demo** (links to live demo)  
    - **Source Code** (links to GitHub repo)  

#### 3.3 Technologies  
- Section heading: `<h2>`: **Technologies**  
- Suggested layout: Three columns using Bootstrap’s grid  
- **Used:** Horizontal scrolling list of skills  
- Content: 4–6 technologies you know (e.g., HTML, CSS, JavaScript, React, Node.js, SQL)

#### 3.4 Contact  
- Section heading: `<h2>`: **Contact**  
- Approach: Contact pills fixed on screen  
- Suggested content: Three Bootstrap cards or icon–link blocks for:
  - GitHub (link to profile)  
  - LinkedIn (link to profile)  
  - Resume (link to hosted PDF or download)  

---

### 4. Best Practices  
- **Semantic HTML:** Proper heading order (`<h1>` → `<h2>` → `<h3>`), meaningful tags, alt text, ARIA labels  
- **Color Palette:**  
  - Limit to 2–3 basic colors  
  - Used: Dark theme with light colors  
- **Responsive Design:**  
  - Ensure layouts adapt to mobile view  
  - Originally with Bootstrap breakpoints  
- **Clean Code:**  
  - Organized files (e.g., `index.html`, `styles.css`, React components)  
  - Helpful comments added where needed  

---

### 5. Deployment & Domain  
- Hosted on: **Vercel**  
- Domain: Free custom subdomain (e.g., `yourname.vercel.app`)  
- ✅ All links and buttons verified to work as expected
