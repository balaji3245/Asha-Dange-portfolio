import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Custom Vite plugin to act as a local backend for our CMS
function localCmsPlugin() {
  return {
    name: 'local-cms-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/save-portfolio' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              // Write the incoming JSON directly to the source code file
              const dataPath = path.resolve(process.cwd(), './src/data/portfolioData.json');
              const parsedData = JSON.parse(body);
              
              fs.writeFileSync(dataPath, JSON.stringify(parsedData, null, 2));
              
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Data saved successfully to source code!' }));
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
