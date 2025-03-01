# Sunil Kumar - Portfolio Website

A futuristic portfolio website built with Next.js, React, Tailwind CSS, and Three.js.

## Features

- 🌙 Dark mode by default with light mode toggle
- 🎨 Futuristic UI with neon glow effects
- 🌐 Interactive 3D background with Three.js
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with Next.js
- 🔄 Smooth animations with Framer Motion
- 📝 Contact form with EmailJS integration
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: Three.js
- **Form Handling**: EmailJS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── app/             # App router pages
│   ├── components/      # React components
│   └── styles/          # Global styles
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Project dependencies
```

## Customization

### Contact Form

To make the contact form work, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the following in `Contact.tsx`:
   ```typescript
   await emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     formRef.current!,
     "YOUR_USER_ID"
   );
   ```

### Profile Image

Replace the placeholder image at `public/profile-placeholder.jpg` with your own profile image.

### Project Images

Add your project images to the `public/` directory and update the paths in `Projects.tsx`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [EmailJS](https://www.emailjs.com/)
