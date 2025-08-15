import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
import { ethers } from 'ethers';
import Safe from '@safe-global/protocol-kit';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET!;
const SAFE_ADDRESS = process.env.SAFE_ADDRESS!;
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY!;
const RPC_URL = process.env.RPC_URL!; // Ethereum/Polygon/Arbitrum RPC

function verifySignature(req: VercelRequest) {
  const signature = req.headers['x-hub-signature-256'] as string;
  if (!signature) return false;
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  if (!verifySignature(req)) return res.status(401).send('Invalid signature');

  const event = req.headers['x-github-event'] as string;
  console.log(`🔔 Event received: ${event}`);

  try {
    if (event === 'pull_request' && req.body.action === 'closed' && req.body.pull_request.merged) {
      await signAndExecute(`Auto-approved from PR #${req.body.number}`);
    }
    if (event === 'issue_comment' && req.body.comment.body.trim() === '/sign') {
      await signAndExecute(`Manual sign request from issue #${req.body.issue.number}`);
    }
    res.status(200).send('Processed');
  } catch (err) {
    console.error('❌ Error processing webhook:', err);
    res.status(500).send('Error');
  }
}

async function signAndExecute(description: string) {
  console.log(`🚀 Executing Safe transaction: ${description}`);

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);

  const safeSdk = await Safe.create({
    ethAdapter: { signerOrProvider: signer },
    safeAddress: SAFE_ADDRESS
  });

  const tx = await safeSdk.createTransaction({
    transactions: [
      { to: '0x000000000000000000000000000000000000dEaD', value: ethers.parseEther('0.001').toString(), data: '0x' }
    ]
  });

  await safeSdk.executeTransaction(tx);
  console.log(`✅ Transaction executed: ${description}`);
}
