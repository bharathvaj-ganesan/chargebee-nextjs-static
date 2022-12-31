# Next.js Subscription Pricing Page Starter

A free Next.js TypeScript subscription page template for SaaS products, online services and more.


## Features

- ⚡ **Next.js** — The React Framework
- 🤑 **Chargebee Checkout** - Subscription Management 
- 💡 **Twind** — The smallest, fastest, most feature complete Tailwind-in-JS solution in existence
- 📏 **ESLint** — Pluggable JavaScript linter
- 🐶 **Husky** — Use git hooks with ease
- 💖 **Prettier** — Opinionated Code Formatter
- 🐶 **Husky** — Use git hooks with ease
- 📄 **Commitizen** — Conventional commit messages CLI
- 🚓 **Commitlint** — Lint commit messages
- 🖌 **Renovate** — Dependency update tool
- 🚫 **lint-staged** — Run linters against staged git files
- 🗂 **Absolute import** — Import folders and files using the `@` prefix

## Demo

[https://chargebee-nextjs-static.vercel.app/](https://chargebee-nextjs-static.vercel.app/)

![Screenshot of the app](https://raw.githubusercontent.com/bharathvaj-ganesan/chargebee-nextjs-static/main/public/demo.png)

## 🚀 Getting started

Easiest way to get started is by clicking the "Deploy with Vercel" button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbharathvaj-ganesan%2Fchargebee-nextjs-static&demo-title=Chargebee%20Subscription%20Pricing%20Page%20Starter)

If you do not want to deploy, [click here](https://github.com/jkytoela/next-startd/generate) to create a new repository with this template.

You might need to do the following steps to customize,

* Update the env variable `NEXT_PUBLIC_CHARGEBEE_SITE_ID` with your site id.
* Modify the item prices in this file `utils/chargebee.ts`


**Local Development**

Run the following commands inside the project folder:

1. `yarn`
2. `yarn dev`

To view the project open `http://localhost:3000`

## 🤝 Contributing

1. Fork this repository
2. Create your branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Raise PR against [the original repository](https://github.com/bharathvaj-ganesan/chargebee-nextjs-static).

**After your pull request is merged**, you can safely delete your branch.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for more information.

## Resources

* https://www.chargebee.com/checkout-portal-docs/dropIn-overview.html

* https://apidocs.chargebee.com/docs/api/hosted_pages#hosted_page_attributes

## Credits

Inspired from [Vercel Subscription Template](https://github.com/vercel/nextjs-subscription-payments)
