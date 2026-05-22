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
    const newMessage = {
      ...req.body,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    // Function to encode UTF-8 to Base64 safely
    const utf8ToBase64 = (str) => Buffer.from(str, 'utf8').toString('base64');
    const base64ToUtf8 = (str) => Buffer.from(str, 'base64').toString('utf8');

    const repoUrl = `https://api.github.com/repos/${repo}/contents/src/data/messages.json`;
    
    // 1. Get current file SHA and content
    const getRes = await fetch(repoUrl, {
      headers: { 
        'Authorization': `token ${token}`,
        'User-Agent': 'Vercel-Serverless-Function'
      }
    });
    
    let messages = [];
    let sha = null;

    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
      const contentUtf8 = base64ToUtf8(fileData.content);
      messages = JSON.parse(contentUtf8);
    } else if (getRes.status !== 404) {
      throw new Error(`GitHub Auth Failed (${getRes.status}). Check Token & Repo.`);
    }

    // Append new message
    messages.push(newMessage);
    const jsonString = JSON.stringify(messages, null, 2);
    
    // 2. PUT updated content
    const putBody = {
      message: 'New contact form submission',
      content: utf8ToBase64(jsonString)
    };
    if (sha) putBody.sha = sha;

    const putRes = await fetch(repoUrl, {
      method: 'PUT',
      headers: { 
        'Authorization': `token ${token}`, 
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Serverless-Function'
      },
      body: JSON.stringify(putBody)
    });
    
    if (!putRes.ok) {
      throw new Error(`GitHub Save Failed (${putRes.status}).`);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
