# Piyusha Bhalerao - Portfolio Website

A modern, minimalist portfolio website for UI/UX Designer Piyusha Bhalerao, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Loading Screen**: Elegant count-up animation from 0 to 100 with smooth fade transition
- **Responsive Design**: Mobile-first approach with clean, modern aesthetics
- **Smooth Animations**: Powered by Framer Motion for fluid user interactions
- **Component-Based Architecture**: Well-structured, reusable components
- **TypeScript**: Full type safety throughout the application
- **Clean Code**: Following best practices and modern development standards

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── CountUp.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navigation.tsx
│   └── index.ts
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Components

### LoadingScreen
- Displays a count-up animation from 0 to 100
- Smooth fade transition to main content
- Prevents scrolling during loading

### Navigation
- Fixed header with smooth reveal animation
- Responsive mobile menu
- Clean, minimal design

### Hero
- Main landing section with Piyusha's introduction
- Staggered text animations
- Call-to-action button

### CountUp
- Reusable counter component with spring animations
- Configurable duration, direction, and formatting
- Uses Framer Motion for smooth transitions

## Design Philosophy

The website embodies Piyusha's design philosophy of creating meaningful, conversation-sparking designs. The clean, minimal aesthetic allows her work and message to take center stage while providing an excellent user experience.

## Future Enhancements

- About section with detailed background
- Work portfolio showcase
- Contact form
- Blog/insights section
- Dark mode toggle
- Performance optimizations