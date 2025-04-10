# Cyberhertz Consultants Clone

This is a simple clone of the Cyberhertz Consultants website built with basic HTML, CSS, and JavaScript. The website features a dark mode toggle and a clean, minimal design.

## Features

- Responsive design
- Dark mode toggle
- Simple contact form
- Individual HTML, CSS, and JS files for each page

## How to Download

### Option 1: Clone from GitHub

```bash
git clone https://github.com/yourusername/cyberhertz-clone.git
cd cyberhertz-clone
```

### Option 2: Download as ZIP

1. Download the ZIP file from the GitHub repository
2. Extract the ZIP file to your preferred location
3. Open the folder in your code editor

## How to Setup on GitHub

1. Create a new repository on GitHub
2. Initialize git in your local project folder (if not already initialized):

```bash
cd cyberhertz-clone
git init
git add .
git commit -m "Initial commit"
```

3. Add your GitHub repository as remote and push:

```bash
git remote add origin https://github.com/yourusername/cyberhertz-clone.git
git branch -M main
git push -u origin main
```

## How to Run Locally

### Using any HTTP server

You can use any HTTP server to serve the files. Here are a few options:

#### Option 1: Using Python's built-in HTTP server

```bash
# For Python 3
python -m http.server
```

#### Option 2: Using Node.js (with http-server)

```bash
# Install http-server globally if not installed
npm install -g http-server

# Run the server
http-server
```

#### Option 3: Using VS Code Live Server extension

If you're using Visual Studio Code, you can install the "Live Server" extension and start the server by clicking "Go Live" in the status bar.

## How to Deploy

### Deploy to GitHub Pages

1. If your repository is not already set up for GitHub Pages, go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the main branch as the source
4. Click Save
5. Your site will be available at `https://yourusername.github.io/cyberhertz-clone/`

### Deploy to Netlify

1. Sign up for a Netlify account if you don't have one
2. Click "New site from Git"
3. Select GitHub and choose your repository
4. Configure the build settings (not required for this static site)
5. Click "Deploy site"

## Project Structure

```
cyberhertz-clone/
├── index.html              # Homepage
├── team.html               # Team page
├── projects.html           # Projects page
├── blog.html               # Blog page
├── contact.html            # Contact page
├── src/
│   ├── styles/
│   │   └── style.css       # Main CSS file
│   └── scripts/
│       ├── darkMode.js     # Dark mode functionality
│       ├── index.js        # Homepage scripts
│       ├── team.js         # Team page scripts
│       ├── projects.js     # Projects page scripts
│       ├── blog.js         # Blog page scripts
│       └── contact.js      # Contact page scripts
└── README.md               # This file
```
