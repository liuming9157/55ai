
# 👨‍💼 [55AI](https://www.55ai.store/) - Professional  AI Navigation 

[English](README.md) | [中文](README.zh.md)

Introducing 55AI, an open-source  AI tools collection and navigation project.

This project was built to give developers & makers a great starting point to collect and search AI applications. This is your launch pad - fork the code, modify it, and make it your own to search a popular AI app.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)

[![55AI Demo](https://alioss-cdn.mzyun.tech/55ai/20240606/158d227d018da0cec062cc9c1b5a6781.png)](http://www.55ai.store/)

## How It Works

Live demo **[here](http://www.55ai.store/)**.

The app is powered by:


- ▲ [Nuxt3](https://nuxt.com/) for app and landing page
- 🔋 [Supabase](https://supabase.com/) for DB & Auth

- ⭐️ [Element-plus](https://element-plus.org/) for UI components
- ⭐️ [Tailwind CSS](https://tailwindcss.com/) for styles
- ▲ [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai) for deployments



## Running Locally

To create your own 55AI app, follow these steps:


### 1. Vercel template

To setup Supabase/Vercel and your github repo, click on the Vercel Deploy Button and follow the steps.

IMPORTANT: In the Supabase integration step: Make sure you leave the Create sample tables option checked. This might take a few minutes to complete.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)

The Vercel Deployment will create a new repository with this template on your GitHub account and guide you through a new Supabase project creation. The Supabase Vercel Deploy Integration will set up the necessary Supabase environment variables and run the SQL migrations to set up the Database schema on your account. You can inspect the created tables in your project's Table editor.

This will create the tables with their respective columns and RLS policies:

- tools


### 2. Clone your newly created repo:

```
git clone https://github.com/liuming9157/55ai.git
```

### 3. Enter your newly created repo's directory:

```
cd 55ai
```

### 4. Install dependencies:

For npm:

```bash
npm install
```

For pnpm:

```bash
pnpm install
```

### 5. Magic Link Auth (Supabase)

In your supabase [dashboard](https://supabase.com/dashboard/), select newly created project, go to Authentication -> Email Templates -> Magic Link and paste the following template:

```
<h2>Magic Link</h2>
<p>Follow this link to login:</p>
<p><a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">Log In</a></p>
```

Then, make sure to setup your site URL and redirect urls in the supabase dashboard under Authentication -> URL Configuration.

For example:

Site URL: http://www.55ai.store

Redirect URL: http://www.55ai.store/**


### 7. Configure [Vercel Blob](https://vercel.com/docs/storage/vercel-blob/quickstart#client-uploads) for image uploads

In your Vercel project, create a [Blob store](https://vercel.com/docs/storage/vercel-blob/quickstart#create-a-blob-store)

- In your Vercel dashboard, select the Storage tab, then select the Connect Database button.
- Under the Create New tab, select Blob and then the Continue button.

Then to configure in your .env:

- In your Vercel dashboard, select the Settings tab, then select the Environment Variables tab.
- Copy your `BLOB_READ_WRITE_TOKEN` to your .env


### 10. Start the development server:

For npm:

```bash
npm run dev
```

For pnpm:

```bash
pnpm dev
```

### 11. Visit `http://localhost:3000` in your browser to see the running app.

## One-Click Deploy

Default deploy using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)



## Contributing

We welcome collaboration and appreciate your contribution to 55AI. If you have suggestions for improvement or significant changes in mind, feel free to open an issue!

If you want to contribute to the codebase make sure you create a new branch and open a pull request that points to `dev`.

## Resources and Support

- wechat: liuming9157
- Help Email: liuming@mzsat.cn

## License

55AI is released under the [MIT License](https://choosealicense.com/licenses/mit/).


