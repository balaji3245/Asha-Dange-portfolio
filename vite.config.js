import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom Vite plugin to act as a local backend for our CMS
// Only runs in dev mode — safe for Vercel production builds
function localCmsPlugin() {
  return {
    name: 'local-cms-plugin',
    apply: 'serve', // ← Only apply during dev server, NOT during build
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/save-portfolio' && req.method === 'POST') {
          // Dynamically import fs/path so they are never bundled into the build
          const { default: fs } = await import('fs');
          const { default: path } = await import('path');
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const dataPath = path.resolve(process.cwd(), './src/data/portfolioData.json');
              const parsedData = JSON.parse(body);
              fs.writeFileSync(dataPath, JSON.stringify(parsedData, null, 2));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Data saved successfully!' }));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
        } else if (req.url === '/api/submit-form' && req.method === 'POST') {
          const { default: fs } = await import('fs');
          const { default: path } = await import('path');
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const dataPath = path.resolve(process.cwd(), './src/data/messages.json');
              const parsedData = JSON.parse(body);
              let messages = [];
              if (fs.existsSync(dataPath)) {
                messages = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
              }
              messages.push(parsedData);
              fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    localCmsPlugin()
  ],
})
