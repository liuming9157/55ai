
# 👨‍💼 [55AI](https://www.55ai.store/) - 专业 AI 导航

[English](README.md) | [中文](README.zh.md)

这是一个开源的AI工具集合和导航项目。

该项目旨在为开发者和爱好者提供一个良好的起点，用于收集和搜索AI应用。这是你的工作台 ——fork代码，修改它，使其成为你自己的AI应用搜索引擎。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)

[![55AI Demo](/public/demo.png)](http://www.55ai.store/)

## 如何使用

Live demo **[here](http://www.55ai.store/)**.

该应用由以下技术支持：


- ▲ [Nuxt3](https://nuxt.com/) 用于应用程序和着陆页
- 🔋 [Supabase](https://supabase.com/) 用于数据库和身份验证

- ⭐️ [Element-plus](https://element-plus.org/) 用于UI组件
- ⭐️ [Tailwind CSS](https://tailwindcss.com/) 用于样式
- ▲ [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai) for deployments



## 本地运行

要创建自己的AI头像应用，请遵循以下步骤：



### 1. Vercel模板

要设置Supabase和Vercel以及您的GitHub仓库，请点击Vercel部署按钮并按照步骤操作  

重要提示：在Supabase集成步骤中：确保选中“Create sample tables”选项。这可能需要几分钟才能完成。


[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)

Vercel部署将在您的GitHub帐户上创建一个新的存储库，并引导您完成新的Supabase项目创建。Supabase Vercel部署集成将设置必要的Supabase环境变量并运行SQL迁移，以在您的帐户上设置数据库模式。您可以在项目的数据表编辑器中检查创建的表。

这将创建具有各自列和RLS策略的表：

- tools


### 2. 克隆新创建的仓库：

```
git clone https://github.com/liuming9157/55ai.git
```

### 3. 进入新创建的仓库目录：

```
cd 55ai
```

### 4. 安装依赖项：

For npm:

```bash
npm install
```

For pnpm:

```bash
pnpm install
```

### 5. Magic Link Auth (Supabase)

在您的 supabase [dashboard](https://supabase.com/dashboard/), 中，选择新创建的项目，转到认证 -> 电子邮件模板 -> 魔法链接，然后粘贴以下模板：

```
<h2>Magic Link</h2>
<p>Follow this link to login:</p>
<p><a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">Log In</a></p>
```

接着，请确保在Supabase控制台的认证 -> URL配置中设置您的网站URL和重定向URL。

Site URL: http://www.55ai.store

Redirect URL: http://www.55ai.store/**


### 7. 配置 [Vercel Blob](https://vercel.com/docs/storage/vercel-blob/quickstart#client-uploads) 以上传图片

在您的Vercel项目中，创建一个 [Blob store](https://vercel.com/docs/storage/vercel-blob/quickstart#create-a-blob-store)

- 在Vercel控制台中，选择“存储”标签，然后点击“连接数据库”按钮。
- 在“新建”标签下，选择“Blob”，然后点击“继续”按钮。

接下来，在您的.env文件中进行配置：

- 在Vercel控制台中，选择“设置”标签，然后选择“环境变量”标签。
- 将您的BLOB_READ_WRITE_TOKEN复制到您的.env文件中。


### 10. 启动开发服务器：

For npm:

```bash
npm run dev
```

For pnpm:

```bash
pnpm dev
```

### 11.访问浏览器中的 `http://localhost:3000` 查看运行中的应用。  

## 一键部署  

使用Vercel默认部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55aiT&envDescription=Set%20up%20environment%20variables%20for%2055AI%20and%20redirect%20URL%20in%20Supabase%20Auth%20dashboard.%20See%20.env.example%20for%20full%20config.&envLink=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Fblob%2F55ai%2F.env.example&project-name=55ai-clone&repository-name=55ai-clone&demo-title=AI%2055AI&demo-url=https%3A%2F%2Fwww.55ai.store%2F&demo-image=https%3A%2F%2Falioss-cdn.mzyun.tech%2F55ai%2F20240606%2F158d227d018da0cec062cc9c1b5a6781.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fliuming9157%2F55ai%2Ftree%2F55ai)



## 贡献

我们欢迎协作，并感谢您对55AI的贡献。如果您有任何改进意见或重大更改的想法，请随时打开问题！

如果您想贡献代码，请确保创建新的分支，并向dev分支提交拉取请求。


## 许可证
55AI根据MIT许可证[MIT License](https://choosealicense.com/licenses/mit/)发布。


## 支持  
邮箱：liuming@mzsat.cn
![企业微信](http://alioss-cdn.mzyun.tech/common/qrcode.jpg)
