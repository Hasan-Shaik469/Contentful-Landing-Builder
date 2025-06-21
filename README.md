# Contentful Landing Builder

A fullstack solution for creating and managing landing pages with Contentful's headless CMS and Next.js.

## Features

-  Drag-and-drop landing page builder in Contentful
-  Next.js frontend with SSG rendering
-  Real-time previews
-  Undo/redo functionality
-  Optimized image handling
-  Fully responsive components
-  High performance (Lighthouse scores ≥90)

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **CMS**: Contentful (GraphQL API)
- **State Management**: Redux Toolkit with undo/redo
- **Styling**: CSS Modules
- **Deployment**: Vercel

## Setup Instructions

### 1. Contentful Setup

1. Create a new space in Contentful
2. Set up the content model:
   - Content Type: `landingPage`
   - Fields:
     - `slug` (Text, required)
     - `title` (Text)
     - `description` (Text)
     - `seoImage` (Media)
     - `layoutConfig` (JSON Object)

3. Install the app in Contentful:
   ```bash
   cd contentful-app
   npm install
   npm run build
   contentful-app-sdk create
   ```

# 2. Local Development
##Clone the repository:

```bash
git clone https://github.com/yourusername/contentful-landing-builder.git
```

##Set up environment variables:

```bash
cp .env.example .env.local
```
##Fill in your Contentful credentials:

```text
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
CONTENTFUL_ENVIRONMENT=master
```
##Install dependencies and run:

```bash
cd nextjs-frontend
npm install
npm run dev
```
##Project Structure
```text
contentful-landing-builder/
├── contentful-app/          # Contentful UI Extension
│   ├── src/                 # React components for the builder
│   └── build/               # Built extension files
├── nextjs-frontend/         # Next.js application
│   ├── app/                 # App router
│   ├── components/          # React components
│   └── lib/                 # Contentful queries
└── .github/                # CI/CD workflows
```

##Available Scripts
In the nextjs-frontend directory:

npm run dev: Start development server

npm run build: Create production build

npm run start: Start production server

npm run lint: Run ESLint

npm run test: Run Jest tests

#Deployment
##1.Vercel:

###Connect your GitHub repository

###Set environment variables

###Enable ISR (Incremental Static Regeneration)

##2.Contentful:

###Deploy the app extension

###Configure the fullscreen interface

##Content Model Notes
The layoutConfig field stores JSON in this format:
```
json
{
  "blocks": [
    {
      "type": "hero",
      "data": {
        "heading": "Welcome",
        "subtitle": "Subtitle text",
        "ctaText": "Click me",
        "ctaUrl": "/test"
      }
    }
  ]
}
```

##Supported block types:

###hero: Full-width hero section

###twoColumn: Text + image layout

###imageGrid: 2x2 image gallery

##Troubleshooting
###Contentful API errors: Verify your space ID and access tokens

###GraphQL issues: Test queries in the Contentful GraphQL playground

###Missing content types: Double-check the content model setup
