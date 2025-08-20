import crypto from 'crypto';

const GITHUB_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

function verifySignature(req) {
  const signature = req.headers['x-hub-signature-256'];
  const payload = JSON.stringify(req.body);
  const hmac = crypto.createHmac('sha256', GITHUB_SECRET);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');

  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  if (!verifySignature(req)) {
    console.warn("⚠️ Webhook signature mismatch");
    return res.status(401).json({ error: "Invalid signature" });
  }

  const event = req.headers['x-github-event'];
  const payload = req.body;

  switch (event) {
    case 'push':
      console.log(`🔁 Push detected: ${payload.head_commit?.message}`);
      // Trigger vault sync or update dashboard state here
      break;

    case 'pull_request':
      console.log(`📥 PR opened: ${payload.pull_request?.title}`);
      // Trigger notification or CI logic here
      break;

    default:
      console.log(`📡 Unhandled event: ${event}`);
  }

  res.status(200).json({ success: true });
}
