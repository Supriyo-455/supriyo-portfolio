# 🚀 Supriyo Paul - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as an Automation Engineer & Full-Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional design with beautiful gradients and animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Smooth scrolling navigation, hover effects, and animations
- **Dark/Light Mode Ready**: Built with a comprehensive design system
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind animations
- **Deployment**: GitHub Pages (configured)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── SkillsProgress.tsx # Skills with progress bars
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Project showcase
│   ├── Education.tsx   # Education & certifications
│   ├── Testimonials.tsx # Recommendations
│   ├── Contact.tsx     # Contact information
│   ├── Navigation.tsx  # Navigation header
│   └── ScrollToTop.tsx # Scroll to top button
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles & design system
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Supriyo-455/supriyo-codes-shine.git
   cd supriyo-codes-shine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Color Palette**: Primary blue, accent purple, and semantic colors
- **Typography**: Modern font stack with proper hierarchy
- **Spacing**: Consistent spacing scale
- **Shadows**: Elegant shadow system for depth
- **Animations**: Smooth transitions and micro-interactions

## 📱 Sections

### 1. **Hero Section**

- Personal introduction with gradient background
- Social media links (GitHub, LinkedIn, Email)
- Skill badges
- Call-to-action buttons

### 2. **About Section**

- Professional summary
- Skills organized by categories
- Statistics and achievements

### 3. **Skills Progress**

- Visual progress bars for skill proficiency
- Categorized by domain (Programming, Automation, IoT, AI)
- Expert/Advanced/Intermediate level indicators

### 4. **Experience**

- Work history with detailed descriptions
- Company information and duration
- Technologies used for each role

### 5. **Projects**

- Featured projects with descriptions
- Technology stacks and key features
- GitHub links and demo buttons
- Visual categorization

### 6. **Education**

- Academic background
- Professional certifications
- Achievements and highlights

### 7. **Testimonials**

- Professional recommendations
- Star ratings and feedback
- Performance statistics

### 8. **Contact**

- Contact information
- Social media links
- Collaboration opportunities

## 🔧 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, bio
- `src/components/About.tsx` - About description
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Projects
- `src/components/Education.tsx` - Education
- `src/components/Contact.tsx` - Contact details

### Styling

- Colors: Update CSS variables in `src/index.css`
- Layout: Modify Tailwind classes in components
- Animations: Add custom keyframes in `tailwind.config.ts`

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Proper meta tags and semantic structure

## 🌐 Deployment

The portfolio is configured for automatic GitHub Pages deployment using GitHub Actions:

### 🚀 Automatic Deployment (Recommended)

1. **Push to GitHub**: The workflow automatically deploys on every push to main branch
2. **Enable GitHub Pages**: Go to Settings → Pages → Source → GitHub Actions
3. **Monitor**: Check the Actions tab for deployment status

### 📋 Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 📖 Detailed Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: paulsupriyo64nk@gmail.com
- **GitHub**: [@Supriyo-455](https://github.com/Supriyo-455)
- **LinkedIn**: [Supriyo Paul](https://linkedin.com/in/supriyopaul455)
- **Portfolio**: [https://supriyo-455.github.io/supriyo-portfolio/](https://supriyo-455.github.io/supriyo-portfolio/)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
