# Guide: Editing Your FAY_Motion Portfolio Website

This guide explains how to modify the key content and appearance of your portfolio website.

## File Structure Overview

Your website consists of several files:

1.  **`index.html`**: Contains the structure and text content of your web pages (like your name, about text, skills list, links, statistics, etc.).
2.  **`base.css`**: Contains global styles, body settings, default fonts, and basic structure.
3.  **`header.css`**: Styles specifically for the header and navigation elements.
4.  **`sections.css`**: Styles for the main content sections (Profile, About Me, Skills, My Projects, Statistics, Get in Touch) and section separators.
5.  **`footer.css`**: Styles for the footer area.
6.  **`responsive.css`**: Contains all the `@media` query rules for adapting the layout to different screen sizes (mobile and desktop).
7.  **`script.js`**: Contains JavaScript code for interactive elements (mobile menu toggle, statistics counter animation).

You will primarily edit `index.html` for content changes and the various `.css` files for visual changes.

## How to Edit

You can edit these files using any plain text editor (like Notepad, TextEdit, VS Code, Sublime Text, Atom, etc.). After making changes, save the relevant file(s) and refresh the page in your web browser to see the updates.

**Important:** It's always a good idea to make a backup copy of the files before making significant changes.

---

## Editing Content (`index.html`)

### 1. Changing the Profile Picture

*   **File:** `index.html`
*   **Location:** Inside `<section class="profile-section">`
*   **Code to find:**
    ```html
    <img src="FAY_Motion.png" alt="Profile picture of FAY">
    ```
*   **How to change:**
    *   Replace `"FAY_Motion.png"` with the filename of your new profile picture.
    *   Make sure your new image file is placed in the **same folder** as the `index.html` file.
    *   Optionally, update the `alt` text to accurately describe the new image.

### 2. Changing Your Name and Title

*   **File:** `index.html`
*   **Location:** Inside `<div class="profile-text">` within the profile section.
*   **Code to find:**
    ```html
    <h1>Hello, I'm FAY</h1>
    <p>Fullstack Developer, IoT Developer, Animator, AI Enthusiast</p>
    ```
*   **How to change:** Edit the text directly within the `<h1>` (your name) and `<p>` (your title/tagline) tags.

### 3. Updating Social Media Links

*   **File:** `index.html`
*   **Location:** Inside `<ul class="social-links-list">` within the profile section.
*   **Code structure for each link:**
    ```html
    <li>
        <a href="[Your Link Here]" target="_blank" rel="noopener noreferrer" aria-label="[Description]">
            <i class="fab fa-[icon-name]"></i>
        </a>
    </li>
    ```
*   **How to change/add:**
    *   **Link:** Change the URL inside the `href="..."` attribute.
    *   **Icon:** Change the Font Awesome icon class in `<i class="fab fa-[icon-name]">`. You can find icon names on the [Font Awesome website](https://fontawesome.com/search?m=free&s=brands). Make sure you use the correct prefix (e.g., `fab` for brands).
    *   **Description (Accessibility):** Update the `aria-label="..."` to describe the link (e.g., "GitHub Profile", "LinkedIn Profile").
    *   **To Add a New Link:** Copy an existing `<li>...</li>` block, paste it within the `<ul>`, and update the `href`, `aria-label`, and icon class (`<i>` tag).
    *   **To Remove a Link:** Delete the entire `<li>...</li>` block for the link you want to remove.

### 4. Editing the "About Me" Section

*   **File:** `index.html`
*   **Location:** Inside `<section id="about" class="about-section">`
*   **Code to find:**
    ```html
     <p>
         I am a Website Developer, Bot Developer, and AI Enthusiast who has been learning
         in the field of technology since the age of 13.
     </p>
    ```
*   **How to change:** Edit the text directly within the `<p>` tag.

### 5. Updating the "My Skills" List

*   **File:** `index.html`
*   **Location:** Inside `<ul class="skill-list">` within the skills section.
*   **Code structure for each skill:**
    ```html
    <li>Fullstack Development</li>
    ```
*   **How to change:**
    *   **Edit a Skill:** Change the text inside an existing `<li>` tag.
    *   **Add a Skill:** Add a new line `<li>Your New Skill</li>` within the `<ul>`.
    *   **Remove a Skill:** Delete the entire `<li>...</li>` line for the skill you want to remove.

### 6. Adding Projects

*   **File:** `index.html`
*   **Location:** Inside `<section id="project" class="project-section">`
*   **Current Code:**
    ```html
    <p style="text-align: center; color: #cccccc;">Project list coming soon!</p>
    ```
*   **How to change:**
    *   Replace the placeholder `<p>` tag with your own HTML structure for displaying projects. This might involve creating divs for each project, including images (`<img>`), titles (`<h3>` or `<h4>`), descriptions (`<p>`), and links (`<a>`). You may need to add corresponding styles in `sections.css`.

### 7. Updating Statistics

*   **File:** `index.html`
*   **Location:** Inside `<section id="statistics" class="statistics-section">` within the `<div class="stats-container">`.
*   **Code structure for each statistic:**
    ```html
    <div class="stat-item">
        <span class="stat-number" data-target="[Number Only]" data-text="[Final Text]">0</span>
        <p class="stat-label">[Your Label Here]</p>
    </div>
    ```
*   **How to change:**
    *   **Number (for animation):** Edit the `data-target="[Number Only]"` attribute. This **must** be only the numerical value (e.g., `15`, `500`, `3`).
    *   **Final Display Text:** Edit the `data-text="[Final Text]"` attribute. This should be the exact text you want displayed after the animation finishes (e.g., `"15+"`, `"500+"`, `"3"`).
    *   **Label:** Edit the content inside the `<p class="stat-label">...</p>` tag.
    *   **Initial Display:** The text inside the `<span>` should remain `0`. The JavaScript will change it.
    *   **To Add/Remove Stats:** Add or remove the entire `<div class="stat-item">...</div>` block, ensuring the new item has the correct `data-target`, `data-text`, initial `0`, and label.

### 8. Changing the Contact Email Address

*   **File:** `index.html`
*   **Location:** Inside `<div class="email-display-box">` within the contact section.
*   **Code to find:**
    ```html
    <a href="mailto:yuana6898@gmail.com">yuana6898@gmail.com</a>
    ```
*   **How to change:**
    *   Update the email address in **two places**:
        1.  Inside the `href="mailto:..."` attribute.
        2.  The visible email text between the `<a>` and `</a>` tags.

### 9. Editing the Footer Text

*   **File:** `index.html`
*   **Location:** At the very bottom, inside the `<footer>` tag.
*   **Code to find:**
    ```html
    <footer>
      Made with ❤️ by FAY
    </footer>
    ```
*   **How to change:** Edit the text directly within the `<footer>` tag.

---

## Editing Appearance (CSS Files)

### 1. Changing Global Styles (Background, Font)

*   **File:** `base.css`
*   **Background Color:** Find the `body` selector and change the `background-color` value.
    ```css
    body {
      background-color: #0f0f0f; /* Change this value */
      /* ... other styles ... */
    }
    ```
*   **Font:** Find the `*` or `body` selector and change the `font-family` value.
    ```css
    * {
      /* ... other styles ... */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Change this list */
    }
    ```

### 2. Changing the Accent Color (Green)

The green accent color (`#00ff88`) is used in many places across different CSS files (`header.css`, `sections.css`, `responsive.css`). The easiest way to change it everywhere is to use your text editor's "Find and Replace in Files" (or "Find in Folder") function.

*   **Files:** `header.css`, `sections.css`, `responsive.css`
*   **How to change:**
    1.  Use your editor's "Find in Files/Folder" feature.
    2.  Search for the color code `#00ff88` across all `.css` files in your project folder.
    3.  Use the "Replace All" feature to replace all instances with your new desired hex color code (e.g., `#3498db` for a blue).
    4.  You might also want to find and replace the slightly darker hover color `#00cc66` with a corresponding darker shade of your new accent color.

### 3. Editing Header/Navigation Styles

*   **File:** `header.css`
*   Modify rules within this file to change the appearance of the logo, navigation links, and mobile menu button (excluding responsive behavior).

### 4. Editing Section Styles (Profile, About, Skills, etc.)

*   **File:** `sections.css`
*   Modify rules within this file to change the base appearance of the content sections, including titles, text, images, lists, buttons, and separators.

### 5. Editing Footer Styles

*   **File:** `footer.css`
*   Modify rules within this file to change the appearance of the footer.

### 6. Editing Responsive Layout (Mobile/Desktop Adjustments)

*   **File:** `responsive.css`
*   **Mobile:** To change how elements look or are positioned on screens **smaller than 769px**, edit the rules inside the `@media (max-width: 768px) { ... }` block.
*   **Desktop:** To change how elements look or are positioned on screens **769px or wider**, edit the rules inside the `@media (min-width: 769px) { ... }` block. This includes things like the side-by-side layout for About/Skills and the main content padding.

---

Remember to save your changes in the correct file(s) and refresh your browser to see the results!
