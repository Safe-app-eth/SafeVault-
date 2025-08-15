#!/bin/bash

echo "🔍 Checking for missing 'permissions:' block in workflows..."

missing_permissions=0

for file in .github/workflows/*.yml; do
  if ! grep -q "permissions:" "$file"; then
    echo "❌ Missing 'permissions:' in $file"
    missing_permissions=$((missing_permissions + 1))
  fi
done

if [ "$missing_permissions" -gt 0 ]; then
  echo "⚠️ Found $missing_permissions workflows missing permission scopes."
  exit 1
else
  echo "✅ All workflows have 'permissions:' scoped."
fi
