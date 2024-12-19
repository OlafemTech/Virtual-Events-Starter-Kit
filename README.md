# Virtual Events Starter Kit

A modern, scalable starter kit for virtual events, conferences, and webinars built with Next.js, 100ms, and DatoCMS.

## Features

- 🎭 Multi-Stage Support (YouTube & Live Video)
- 🏢 Virtual Sponsor Expo
- 💼 Career Fair & Networking
- 🎟️ Ticketing System
- 👥 Speaker Profiles
- 📅 Interactive Event Schedule

## Tech Stack

- **Frontend:** Next.js, React, TailwindCSS
- **Video:** 100ms (Live), YouTube (VOD)
- **CMS:** DatoCMS
- **Auth:** GitHub OAuth
- **Deployment:** Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
GITHUB_ID=
GITHUB_SECRET=
HMS_TOKEN_ENDPOINT=
HMS_APP_SECRET=
DATOCMS_API_TOKEN=
DATABASE_URL=
```

## Project Structure

```
virtual-events-starter-kit/
├── components/        # React components
├── pages/            # Next.js pages
├── styles/           # CSS modules
├── lib/             # Utility functions
├── public/          # Static assets
└── config/          # Configuration files
```

## Features Documentation

### Multi-Stage Support
- Configure multiple stages
- Switch between YouTube VOD and live 100ms streams
- Interactive chat and Q&A

### Sponsor Expo
- Virtual booths with customizable content
- Lead generation capabilities
- Analytics dashboard

### Career Fair
- Job posting board
- Networking rooms
- Resume submission

### Ticketing System
- Multiple ticket tiers
- Registration management
- QR code generation

## Contributing

Pull requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE.md](LICENSE.md) for details
