#!/bin/sh
set -e

echo "--- 1. Waiting for Database ---"
# Use the robust Node.js wait script
node scripts/wait-for-db.js

echo "--- 2. Applying Migrations ---"
# 'migrate deploy' is the professional standard for production
npx prisma migrate deploy

echo "--- 3. Conditional Seeding ---"

npm run seed:prod || echo "Seeding skipped or already completed"

echo "--- Deployment Tasks Finished ---"