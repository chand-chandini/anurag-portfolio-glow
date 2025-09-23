# Portfolio Website - Modern Developer Portfolio

A stunning, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for software developers, especially those targeting placement opportunities at leading tech companies.

## ✨ Features

- **Modern Design**: Clean, professional layout with Indian cultural color accents
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and scroll effects
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Fast Loading**: Optimized images and performance
- **Accessible**: ARIA labels and keyboard navigation support

## 🎨 Design System

The portfolio uses a carefully crafted design system inspired by Indian culture:

- **Primary**: Deep Indigo (#312e81) - Professional and trustworthy
- **Accent**: Saffron Orange (#f97316) - Energy and creativity  
- **Success**: Emerald Green (#059669) - Growth and success
- **Gold**: Indian Gold (#f59e0b) - Excellence and achievement

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Me**: Education, skills, and career goals
3. **Technical Skills**: Interactive skill visualization with progress bars
4. **Projects**: Showcase of featured projects with live demos
5. **Achievements**: Certifications, hackathons, and recognition
6. **Contact**: Contact form with social media links

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:8080`

## 🛠️ Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx** - Name, tagline, and social links
2. **src/components/About.tsx** - Education, skills, and background
3. **src/components/Projects.tsx** - Your projects and GitHub links
4. **src/components/Contact.tsx** - Contact information and email
5. **index.html** - SEO meta tags and page title

### Images

Replace the generated project images in `src/assets/` with your actual project screenshots:
- `project-cultural.jpg`
- `project-data-analysis.jpg`
- `project-ecommerce.jpg`
- `project-weather.jpg` 
- `project-task-management.jpg`

### Colors & Styling

The design system is defined in:
- `src/index.css` - CSS variables and component styles
- `tailwind.config.ts` - Tailwind configuration

## 📦 Deployment

### GitHub Pages

1. Install the GitHub Pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. Deploy:
```bash
npm run deploy
```

### Render/Vercel/Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting platform

### Custom Domain

Update the following for custom domain:
1. CNAME file in public folder
2. Meta tags in index.html
3. Canonical URLs

## 🎯 For Placement Drives

This portfolio is specifically designed for:
- **Campus Placements**: Professional appearance suitable for recruiters
- **Tech Companies**: Emphasizes technical skills and projects
- **Indian Students**: Cultural color palette and familiar design elements
- **Modern Recruiters**: Fast loading, mobile-friendly, and accessible

## 📈 SEO Features

- Semantic HTML structure
- Open Graph meta tags for social sharing
- Twitter Card support
- Structured data for better search results
- Fast loading with optimized images
- Mobile-first responsive design

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider submitting a pull request!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

If you need help customizing this portfolio:
- Create an issue in the GitHub repository
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ in India using React, TypeScript, and Tailwind CSS**