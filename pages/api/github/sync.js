import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
  const { githubToken, repo, owner } = req.body;

  const octokit = new Octokit({ auth: githubToken });

  try {
    const { data: file } = await octokit.repos.getContent({
      owner,
      repo,
      path: "config/contracts.ts"
    });

    const content = Buffer.from(file.content, "base64").toString("utf-8");

    res.status(200).json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
