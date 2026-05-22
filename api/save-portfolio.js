export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || 'balaji3245/Asha-Dange-portfolio';
  
  if (!token) {
    return res.status(500).json({ success: false, error: 'GITHUB_TOKEN environment variable is not set in Vercel.' });
  }

  try {
    const payload = req.body;
    const jsonString = JSON.stringify(payload, null, 2);
    
    // Function to encode UTF-8 to Base64 safely
    const utf8ToBase64 = (str) => {
      return Buffer.from(str, 'utf8').toString('base64');
    };

    const repoUrl = `https://api.github.com/repos/${repo}/contents/src/data/portfolioData.json`;
    
    // 1. Get current file SHA
    const getRes = await fetch(repoUrl, {
      headers: { 
        'Authorization': `token ${token}`,
        'User-Agent': 'Vercel-Serverless-Function'
      }
    });
    
    if (!getRes.ok) {
      throw new Error(`GitHub Auth Failed (${getRes.status}). Check Token & Repo.`);
    }
    const fileData = await getRes.json();
    
    // 2. PUT updated content
    const putRes = await fetch(repoUrl, {
      method: 'PUT',
      headers: { 
        'Authorization': `token ${token}`, 
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Serverless-Function'
      },
      body: JSON.stringify({
        message: 'Update portfolio data via Admin Panel (Vercel Backend)',
        content: utf8ToBase64(jsonString),
        sha: fileData.sha
      })
    });
    
    if (!putRes.ok) {
      throw new Error(`GitHub Save Failed (${putRes.status}).`);
    }

    return res.status(200).json({ success: true, message: 'Saved to GitHub successfully!' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
