# 🚀 Railway Upgrade Guide: Skeleton to Pro

This guide outlines the complete path from a zero-setup deployment to a professional enterprise platform. You will start with the free **Launchpad (Skeleton)** edition and upgrade to the **Advanced Pro Version**.

> [!IMPORTANT]
> Following this specific sequence ensures your database stays connected, and your first deployment succeeds without environment errors.

---

## ⚡ 1. Initial Deployment (Free Skeleton)

To get started, deploy the base architecture directly to Railway with a single click. This creates your database, Redis, and API structure.

1.  **Click the button below:**
    
    [![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nodejs-multimodal-rag-starter?referralCode=2psx_t&utm_medium=integration&utm_source=template&utm_campaign=generic)

2.  Click **"Deploy Now"** on the Railway template landing page.
3.  Fill in your repository name and wait for the services to be provisioned.

---

## 💎 2. Get the Pro Advantage

The Skeleton version is a great start, but the **Pro Version** unlocks the full power of Multimodal RAG, Advanced Auth, and Enterprise-grade infrastructure.

1.  **Purchase the Pro Version:**
    Use this link to get your copy on Gumroad:
    [👉 **Buy Node.js Enterprise Pro Version**](https://aymenkani.gumroad.com/l/nodejs-enterprise-launchpad/G7E9WIA-RAILWAY?price=14.3&option=2nCmfCVPlr707OzzOD7UGA%3D%3D&_gl=1*13x7m2m*_ga*NTYyNDU1Mjc4LjE3NjA5NzUzNDg.*_ga_6LJN6D94N6*czE3NjczNTY4MDgkbzMwNSRnMSR0MTc2NzM1NjgyMCRqNDgkbDAkaDA.)

2.  **Download and Extract:** Once purchased, download the Pro `.zip` and extract it to your local machine.

---

## 🛠 3. Step-by-Step Upgrade

Now, let's link your local Pro code to your fresh Railway deployment.

### 📋 Pre-flight Check
*   **VS Code:** Open the extracted Pro folder (not the skeleton repo) in your editor.
*   **Railway Service:** Ensure your Skeleton app is fully deployed on Railway from Step 1.

### A. "Eject" the Service
Before pushing custom code, you must unlock the service from the original template metadata.

1.  Go to your **Railway Dashboard**.
2.  Select your **Node.js Service**.
3.  Navigate to **Settings** > **Source**.
4.  Click the **Eject** button.

> [!NOTE]
> Ejecting does not disconnect your repo; it simply enables custom Git pushes and removes template-specific restrictions.

### B. Update Environment Variables
The Pro version requires specific configuration. Do this **before** pushing code to prevent build failures.

1.  Open `.env.railway` in your local Pro folder.
2.  Copy the entire content.
3.  In Railway, go to the **Variables** tab.
4.  Click **Raw Editor** and paste the new variables.
5.  Click **Update Variables**.

> [!TIP]
> Replacing placeholders in the raw editor is the fastest way to sync your config.

### C. Link Config-as-Code
1.  In **Settings**, scroll to the **Config-as-Code** section.
2.  Click **Add File Path**.
3.  Type: `/railway.toml`

### D. Overwrite with Pro Code
Force-push the new version to your existing repository.

#### Get your Repository URL:
1.  In Railway **Settings** > **Source**, click the link to your GitHub repo.
2.  On GitHub, click the green **Code** button and copy the **HTTPS URL**.

#### Execute the Upgrade:
Run these commands in your local Pro folder terminal:

```bash
# Initialize git and link to your existing repo
git init
git remote add origin [PASTE_YOUR_REPO_URL_HERE]

# Prepare and commit the Pro code
git add .
git commit -m "feat: upgrade to Pro Version"

# Force push to overwrite the skeleton code
git push -f origin main
```

---

## ✅ Post-Upgrade Checklist

- [ ] **Deployment:** Monitor the Railway "Deployments" tab. It should trigger automatically after the push.
- [ ] **Migrations:** Check logs to ensure `npx prisma migrate deploy` ran successfully.
- [ ] **Health Check:** Visit your Railway URL to confirm the Pro features are active.

---

## 💡 Troubleshooting

> [!WARNING]
> **Build Fails:** Ensure you didn't skip the **Config-as-Code** step. Railway needs `railway.toml` to use `Dockerfile.railway`.

> [!CAUTION]
> **Permission Denied:** Ensure you are logged into GitHub in your terminal via CLI or have SSH keys configured for the repository.