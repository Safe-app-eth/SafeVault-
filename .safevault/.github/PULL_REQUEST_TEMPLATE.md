# Make directory if it doesn't exist
mkdir -p .github

# Create the PR template file
cat << 'EOF' > .github/PULL_REQUEST_TEMPLATE.md
### 📦 Summary

Provide a high-level summary of the changes in this pull request.  
What feature, fix, or refactor is being introduced?

---

### ✅ What's Changed

- [ ] List key features, updates, or fixes
- [ ] Example: Added `TransferAllAssets` component
- [ ] Example: Fixed GitHub Actions permissions issue

---

### 🔗 Preview Deployment

| Environment | URL |
|-------------|-----|
| **Vercel**  | [Preview Link](https://reown-appkit-p3i5hjwoa-safewallet-pros-projects.vercel.app) |

---

### 🧪 Testing Checklist

- [ ] Functionality verified locally
- [ ] CI passes on GitHub Actions
- [ ] AppKit sync behavior validated
- [ ] Works across EVM chains (Ethereum, Arbitrum, Polygon)

---

### 🔖 Related Issues

Closes #  
Related to #  
Generated from commit(s): `short-hash`

---

### 🔖 Badges

![CI](https://github.com/thegoodeth/safevault/actions/workflows/ci.yml/badge.svg)  
![Vercel](https://vercel.com/api/badges/reown-appkit/deploy-status.svg)

---

### 🙏 Thanks!

> Keep SafeVault secure and scalable 🚀  
> Every line of code moves us forward.
EOF

# Add, commit, and push to your branch
git add .github/PULL_REQUEST_TEMPLATE.md
git commit -m "📝 Add default pull request template for SafeVault"
git push origin alert-autofix-27
