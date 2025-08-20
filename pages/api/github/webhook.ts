export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const event = req.headers['x-github-event'];
  const payload = req.body;

  if (event === 'push') {
    const commitMsg = payload.commits?.[0]?.message || 'No commit message';
    console.log(`🔁 GitHub Sync Triggered: ${commitMsg}`);

    // TODO: Trigger vault sync or update dashboard state
  }

  res.status(200).json({ success: true });
}
