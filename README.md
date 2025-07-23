# Cerverse Landing Page

This repository contains a basic Next.js + Tailwind CSS project for the Cerverse landing page. The initial version shows a "coming soon" screen with email collection and social links. It is structured to be extended with more sections in the future.

## Version Control

This project uses semantic versioning (SemVer) with automatic version bumping:

- **Major**: Breaking changes (x.0.0)
- **Minor**: New features (0.x.0) 
- **Patch**: Bug fixes (0.0.x)

### Version Management

- Version is automatically incremented on each commit
- Current version is displayed in the footer
- Version files: `src/config/version.ts` and `package.json`

### Manual Version Bumping

```bash
# Patch version (bug fixes)
npm run version:patch

# Minor version (new features)
npm run version:minor

# Major version (breaking changes)
npm run version:major
```

## Development

1. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

Email submissions currently log to the console. Integrate your preferred mailing service in `src/components/EmailForm.tsx`.
