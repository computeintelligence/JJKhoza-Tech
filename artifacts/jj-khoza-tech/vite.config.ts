import path from 'path';
import fs from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'JJ Khoza Tech | Digital Civilization Architecture',
    description:
      'JJ Khoza Tech develops advanced software, algorithms, quantum and classical computing systems, AI, HPC, mathematics, and cryptology.',
  },
  '/about': {
    title: 'About | JJ Khoza Tech',
    description:
      'Discover JJ Khoza Tech’s Johannesburg roots, global outlook, mission, and long-horizon approach to technology development.',
  },
  '/capabilities': {
    title: 'Capabilities | JJ Khoza Tech',
    description:
      'Explore JJ Khoza Tech capabilities across software engineering, algorithms, quantum computing, AI, mathematical technology, HPC, and cryptology.',
  },
  '/research': {
    title: 'Research | JJ Khoza Tech',
    description:
      'See how JJ Khoza Tech connects quantum science, artificial intelligence, mathematics, high-performance computing, and secure systems research.',
  },
  '/projects': {
    title: 'Projects | JJ Khoza Tech',
    description:
      'Explore 15 public JJ Khoza Tech project concepts across health, civic systems, digital economy, intelligent systems, communication, and trust.',
  },
  '/contact': {
    title: 'Contact | JJ Khoza Tech',
    description:
      'Start a conversation with JJ Khoza Tech about advanced technology development, research, algorithms, AI, quantum computing, or cryptology.',
  },
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function applyRouteMetadata(html: string, route: string) {
  const metadata = routeMetadata[route] ?? routeMetadata['/'];
  const title = escapeHtml(metadata.title);
  const description = escapeHtml(metadata.description);
  const routePath = route === '/' ? '/' : `${route}/`;
  const configuredDomain = process.env.REPLIT_DOMAINS?.split(',')[0]?.trim();
  const publicOrigin = configuredDomain ? `https://${configuredDomain}` : '';
  const routeUrl = `${publicOrigin}${routePath}`;
  const imageUrl = `${publicOrigin}/assets/jj-khoza-emblem.jpg`;

  const updatedHtml = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content=".*?"\s*\/?>/s,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?"\s*\/?>/s,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?"\s*\/?>/s,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?"\s*\/?>/s,
      `<meta property="og:url" content="${routeUrl}" />`,
    )
    .replace(
      /<meta property="og:image" content=".*?"\s*\/?>/s,
      `<meta property="og:image" content="${imageUrl}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?"\s*\/?>/s,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?"\s*\/?>/s,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<meta name="twitter:image" content=".*?"\s*\/?>/s,
      `<meta name="twitter:image" content="${imageUrl}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/?>/s,
      `<link rel="canonical" href="${routeUrl}" />`,
    );

  if (updatedHtml.includes('rel="canonical"')) {
    return updatedHtml;
  }

  return updatedHtml.replace(
    '</head>',
    `    <link rel="canonical" href="${routeUrl}" />\n  </head>`,
  );
}

const routeMetadataPlugin: Plugin = {
  name: 'jj-khoza-route-metadata',
  transformIndexHtml: {
    order: 'post',
    handler(html, context) {
      const pathname = new URL(
        context.originalUrl ?? '/',
        'http://localhost',
      ).pathname.replace(/\/$/, '') || '/';
      return applyRouteMetadata(html, pathname);
    },
  },
  async closeBundle() {
    const outputDirectory = path.resolve(
      import.meta.dirname,
      'dist',
      'public',
    );
    const indexPath = path.join(outputDirectory, 'index.html');
    const homeHtml = await fs.readFile(indexPath, 'utf8');

    await Promise.all(
      Object.keys(routeMetadata)
        .filter((route) => route !== '/')
        .map(async (route) => {
          const routeDirectory = path.join(
            outputDirectory,
            route.slice(1),
          );
          await fs.mkdir(routeDirectory, { recursive: true });
          await fs.writeFile(
            path.join(routeDirectory, 'index.html'),
            applyRouteMetadata(homeHtml, route),
          );
        }),
    );
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    routeMetadataPlugin,
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
