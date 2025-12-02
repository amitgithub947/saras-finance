# 🔍 Saras Finance Knowledge Base

A modern, responsive search application for financial terms and concepts built with Vue 3, Vite, and Tailwind CSS. Features real-time search with debouncing, dark mode support, and a beautiful gradient UI.

 
## ✨ Features

### 🎯 Core Functionality
- **Real-time Search**: Instant search with 400ms debouncing for optimal performance
- **Financial Knowledge Base**: Pre-loaded database of financial terms and definitions
- **Expandable Results**: Click any result card to view detailed information
- **Smart Loading States**: Skeleton loaders and loading indicators for better UX

### 🌓 Dark Mode
- **Toggle Support**: Seamless light/dark mode switching
- **Persistent State**: Remembers your preference using localStorage
- **System Preference Detection**: Auto-detects OS dark mode on first visit
- **Smooth Transitions**: Animated color transitions across all UI elements

### 🎨 Modern UI/UX
- **Gradient Backgrounds**: Beautiful animated gradients (blue → indigo → purple)
- **Floating Blob Animations**: Subtle background animations for visual depth
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Transitions for search results, expansions, and interactions

### 📱 Mobile & PWA Optimized
- **Mobile Web App Capable**: Installable as a standalone app on iOS and Android
- **Apple Mobile Web App Support**: Full-screen experience on iOS devices
- **Theme Color for Android Chrome**: Branded address bar color (#3b82f6)
- **SEO-Friendly**: Meta descriptions and semantic HTML for better discoverability
- **Touch Optimized**: Responsive touch targets and active states for mobile interactions
- **Smooth Mobile Scrolling**: Enhanced scrolling performance with `-webkit-overflow-scrolling`
- **Adaptive Text Sizing**: Prevents unwanted zoom on orientation change
- **No Tap Highlight**: Clean touch interactions without blue flash on Android

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm 

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd saras-finance-search
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧩 Key Components

### SearchBar
Real-time search input with loading indicator and debouncing logic. Mobile-optimized with responsive sizing and touch-friendly input fields.

### SearchResultItem
Expandable card component displaying financial term information with smooth expand/collapse animations. Features active states for mobile touch interactions.

### DarkModeToggle
Fixed-position toggle button with animated sun/moon icons for switching themes. Responsive positioning and touch-optimized for mobile devices.

### BaseLoader
Skeleton loading component that adapts to light/dark modes with responsive card sizing.

## 🎯 How It Works

### Search Flow
1. User types in the search bar
2. Input is debounced (400ms delay)
3. Loading state activates
4. Mock API simulates network delay (300-800ms)
5. Results are filtered and displayed
6. Each result can be expanded for detailed information

### Dark Mode Implementation
- Uses Vue 3 Composition API with reactive state
- Applies `dark` class to `<html>` element
- Tailwind CSS handles all dark mode styles
- Preference persists in localStorage

### Data Structure
Financial terms stored in `mockApi.js`:
```javascript
{
  id: number,
  title: string,
  snippet: string,
  details: string
}
```

## 🛠️ Technologies Used

- **Vue 3**: Progressive JavaScript framework with Composition API
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS 4.1**: Utility-first CSS framework
- **PostCSS**: CSS transformation tool
- **JavaScript ES6+**: Modern JavaScript features

## 🎨 Customization

### Adding New Financial Terms
Edit `src/services/mockApi.js` and add entries to the `DATABASE` array:

```javascript
{
  id: 6,
  title: "Your Term",
  snippet: "Brief description",
  details: "Detailed explanation"
}
```

### Customizing Colors
Modify `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        
      }
    }
  }
}
```

### Adjusting Debounce Delay
Change the timeout value in `App.vue`:

```javascript
debounceTimeout = setTimeout(() => {
  performSearch(newQuery);
}, 400); 
```

## 📝 Available Terms

The knowledge base includes definitions for:
- Annual Percentage Rate (APR)
- Bull Market
- Capital Gains Tax
- Diversification
- Equity

Try searching: "equity", "tax", "market", "apr", or "diversification"

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS customization, dark mode settings, and custom color palette
- **postcss.config.js**: PostCSS plugins configuration
- **index.html**: PWA-ready meta tags including:
  - `viewport` - Mobile scaling and zoom control
  - `theme-color` - Android Chrome address bar color (#3b82f6)
  - `mobile-web-app-capable` - Standalone app mode
  - `apple-mobile-web-app-capable` - iOS full-screen support
  - `description` - SEO-friendly meta description

## 🌐 Browser & Device Support

### Desktop Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Mobile Devices
- Android phones (Chrome, Samsung Internet, Firefox)
- iOS devices (Safari, Chrome)
- Tablets (iPad, Android tablets)
- Progressive Web App (PWA) installable on all platforms

### Mobile Optimizations
- Responsive design from 320px width
- Touch-friendly interactive elements (44px+ touch targets)
- Optimized for portrait and landscape orientations
- Hardware-accelerated animations
- Smooth scrolling on all devices 

## 📄 License

ISC

## 👨‍💻 Development

### Code Style
- Vue 3 `<script setup>` syntax
- Composition API
- ES6+ JavaScript
- Tailwind CSS utility classes

### Best Practices
- Component-based architecture
- Reactive state management
- Debounced API calls
- Loading states for better UX
- Accessible UI components

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with  AMIT KUMAR ❤️ for Saras Finance**
