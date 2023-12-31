# Angular Slack Simplified Clone

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Installation

`npm i --legacy-peer-deps`

## Start the app

To start the development server run `nx serve angular-slack`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Create feature

`npx nx g @nx/angular:library workspace --directory=libs/workspace/feature-workspace --standalone --prefix=as --changeDetection=OnPush --style=scss --tags=feature`

## Create data-access

`npx nx g @nx/angular:library data-access-contacts --directory=libs/client/data-access-contacts --tags=data-access`

## Create feature store

`npx nx generate ngrx-feature-store messages --parent=/libs/client/feature-shell/src/lib/shell/shell.routes.ts --route=routeName`

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).
