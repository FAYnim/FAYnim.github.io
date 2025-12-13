# Projects Guide

## How to Add New Projects

To add new projects to your portfolio, simply update the `data/projects.json` file. No code changes required!

### Project Structure

Each project in the JSON file should have the following structure:

```json
{
  "id": "unique-project-id",
  "name": {
    "id": "Nama Proyek (Indonesian)",
    "en": "Project Name (English)"
  },
  "description": {
    "id": "Deskripsi proyek dalam bahasa Indonesia",
    "en": "Project description in English"
  },
  "techStack": ["HTML", "CSS", "JavaScript", "React", "etc"],
  "demoUrl": "https://your-project-demo-url.com",
  "image": "path/to/project-screenshot.png",
  "alt": {
    "id": "Teks alternatif gambar dalam bahasa Indonesia",
    "en": "Alternative text for image in English"
  },
  "popupContent": "<img src='path/to/project-screenshot.png' alt='Alt text' style='width:100%; max-width:900px; margin-top:15px;' loading='lazy'>"
}
```

### Required Fields

- **id**: Unique identifier for the project
- **name**: Project name in Indonesian (id) and English (en)
- **description**: Project description in both languages
- **techStack**: Array of technologies used
- **demoUrl**: URL to live demo or repository
- **image**: Path to project screenshot
- **alt**: Alternative text for the image in both languages
- **popupContent**: HTML content to show in popup when image is clicked

### Example

```json
{
  "id": "my-awesome-app",
  "name": {
    "id": "Aplikasi Keren Saya",
    "en": "My Awesome App"
  },
  "description": {
    "id": "Aplikasi web modern dengan React dan Node.js",
    "en": "Modern web application built with React and Node.js"
  },
  "techStack": ["React", "Node.js", "MongoDB", "Express"],
  "demoUrl": "https://my-awesome-app.com",
  "image": "asset/my-awesome-app-screenshot.png",
  "alt": {
    "id": "Screenshot Aplikasi Keren Saya",
    "en": "My Awesome App Screenshot"
  },
  "popupContent": "<img src='asset/my-awesome-app-screenshot.png' alt='My Awesome App Screenshot' style='width:100%; max-width:900px; margin-top:15px;' loading='lazy'>"
}
```

### Steps to Add a New Project

1. Add your project screenshot to the `asset/` folder
2. Open `data/projects.json`
3. Add your new project object to the array
4. Save the file
5. Refresh your website - the new project will appear automatically!

### Features

- ✅ Multi-language support (Indonesian/English)
- ✅ Dynamic loading from JSON
- ✅ Image popup functionality
- ✅ Responsive design
- ✅ Tech stack display
- ✅ Demo button with external links
- ✅ No code changes needed for new projects

The system automatically handles:
- Language switching
- Popup functionality for project images
- Demo button click events
- Responsive layout
- "Coming Soon" placeholder at the end