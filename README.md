# Freelance Portfolio Website

A modern, responsive portfolio website for a fullstack developer built with React and Vite.

## Features

- **Modern Design**: Vibrant gradients, smooth animations, and polished UI components
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Hero Section**: Professional introduction with stats and skills showcase
- **Projects Portfolio**: 6 featured projects with live demos and GitHub links
- **Client Testimonials**: Real client reviews with developer replies
- **Contact Form**: Functional contact form with multiple contact methods
- **Professional Footer**: Social links and additional information

## Sections

### 🚀 Hero/Intro
- Name: Kumar Ravi Raj
- Role: Fullstack Developer
- Experience: 2019–Present (6+ years)
- Skills: React, Node.js, AWS, Python, HTML, CSS, JavaScript, MongoDB, WordPress
- Stats: Projects completed, years of experience, happy clients, success rate

### 💼 Projects
Featured projects with:
- Project titles and descriptions
- Technology stack tags
- Year of completion
- Live demo links
- GitHub repository links

### 💬 Testimonials
Client reviews featuring:
- Client names and companies
- Review dates (2019-2025)
- Star ratings
- Developer replies

### 📧 Contact
Multiple contact methods:
- WhatsApp integration
- Email contact
- LinkedIn profile
- Functional contact form (Formspree ready)

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with modern features, gradients, and animations
- **Fonts**: Inter & Space Grotesk from Google Fonts
- **Icons**: Emoji-based icons for better cross-platform compatibility

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd freelance-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Customization

### Contact Information
Update the following placeholder information in the respective components:

1. **Contact Component** (`src/components/Contact.jsx`):
   - Replace `YOUR_FORM_ID` in the Formspree URL
   - Update email: `ravi.ranjan@example.com`
   - Update WhatsApp: `+1 234 567 8900`
   - Update LinkedIn: `linkedin.com/in/ravi-ranjan`

2. **Footer Component** (`src/components/Footer.jsx`):
   - Update GitHub URL: `https://github.com/username`
   - Update LinkedIn URL: `https://linkedin.com/in/ravi-ranjan`
   - Update email and WhatsApp links

3. **Projects Component** (`src/components/Projects.jsx`):
   - Replace demo URLs with actual project links
   - Replace GitHub URLs with actual repository links

### Styling
- Primary gradient colors can be customized in `src/App.css`
- Font families can be changed in `index.html` and CSS files
- Component-specific styles are organized in `src/App.css`

## Form Integration

The contact form is ready to integrate with:
- **Formspree**: Replace `YOUR_FORM_ID` in the fetch URL
- **Custom Backend**: Update the endpoint URL in Contact component
- **Other Services**: EmailJS, Netlify Forms, etc.

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure form handling if using Netlify Forms

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images and assets
- Efficient CSS with minimal unused styles
- Smooth animations with CSS transforms
- Responsive design with mobile-first approach

## License

This project is open source and available under the MIT License.

## Contact

For questions or support regarding this portfolio template:
- Email: ravi.ranjan@example.com
- LinkedIn: linkedin.com/in/ravi-ranjan
- GitHub: github.com/username

---

Built with ❤️ using React and Vite