# TradieLine

## Overview
TradieLine is a Next.js application designed as an AI call-handling and review booster system for tradies (tradespeople). The application provides a comprehensive dashboard for managing leads, virtual numbers, reviews, billing, and business settings.

## Project Architecture
- **Frontend**: Next.js 14.2.5 with React 18.2.0
- **Styling**: Tailwind CSS with custom components
- **External Services**: 
  - Supabase for database operations
  - Stripe for payment processing
  - Twilio for SMS/phone services

## Recent Changes
- **2025-09-08**: Project imported from GitHub and configured for Replit environment
- Configured Next.js dev server to run on 0.0.0.0:5000 for proper Replit proxy support
- **2025-09-08**: Restructured application architecture:
  - Separated main marketing website from client portal
  - Created comprehensive landing page based on wireframe specifications
  - Implemented portal login system (currently at /portal, designed for portal.tradeline.com.au subdomain)
  - Added navigation between main site and portal
  - Set up deployment configuration with autoscale target

## Key Features
1. **Dashboard**: Overview of leads, answer rates, response times, and reviews
2. **Virtual Numbers**: Twilio integration for phone number provisioning
3. **Reviews Management**: Google/Facebook integration capabilities
4. **Billing**: Stripe integration for customer portal access
5. **Settings**: Business profile management with SMS templates

## Environment Setup
The application requires the following environment variables:
- SUPABASE_URL
- SUPABASE_ANON_KEY  
- STRIPE_SECRET_KEY
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN

## Development
- Run `npm run dev` to start the development server
- Application serves on port 5000 with proper host configuration for Replit
- Hot reload enabled for development

## Deployment
Configured for autoscale deployment on Replit with:
- Build command: `npm run build`
- Run command: `npm start`