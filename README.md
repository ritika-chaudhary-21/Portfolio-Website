# ✨ Ritika Chaudhary – Developer Portfolio

Welcome to the source code of my personal **portfolio website**, built to showcase my skills, projects, and experiences in web development, data science, and machine learning.

🌐 **Live Site:** [View Portfolio](https://lovable.dev/projects/7cbcefe4-9616-4ed6-b4d3-9f50bf137c28)

---

## 📌 About This Project

This portfolio was designed to:

- Share my technical journey and passions  
- Highlight my projects with code links  
- Showcase internship experiences and certifications  
- Allow visitors to contact me or schedule a call  
- Provide a clean, modern UI with smooth interactions  

---

## 🛠️ Tech Stack

- ⚡ Vite – Fast build tool  
- ⚛️ React + TypeScript  
- 💨 Tailwind CSS – Utility-first styling  
- 🧱 shadcn/ui – Accessible components  
- AI-assisted UI & deployment  

---

## 🚀 Getting Started (Local Setup)

To run the project locally:

### 1. Clone the repository

```bash
git clone <your_git_repo_url>
cd <your_project_folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open http://localhost:5173 to view the portfolio locally.

---

## 🌐 Deployment
To deploy this Vite + React portfolio on Render, follow these steps:

### 📁 1. Push to GitHub
Make sure your project is version-controlled and pushed to a GitHub repository.

### ⚙️ 2. Configure vite.config.ts
Ensure vite.config.ts has the correct base path only if you're using a subdirectory deployment.

For most Render setups (main domain), you can leave it as:

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
});
```

### 🧪 3. Add a build script in package.json
Render needs a build and start script:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
No *start* script is required if you're using Static Site hosting.

### 🌐 4. Set Up on Render
- Go to https://dashboard.render.com
- Click "New → Static Site"
- Connect your GitHub repo
- Fill in the details:
-- Name: portfolio
-- Build Command: npm run build
-- Publish Directory: dist
- Click "Create Static Site"

Render will auto-build and deploy your site.

*🛠 Optional: Enable Auto-Deploy
You can enable "Auto Deploy" from Render so it rebuilds on every GitHub commit.*

---

## 💡 Features

- 📄 Resume & certifications display
- 🛠️ Projects with GitHub links
- 📊 Internship experience cards
- ✉️ Contact form with email integration
- 📅 Calendly integration for call scheduling
- 🌙 Responsive design with soft gradients

---
