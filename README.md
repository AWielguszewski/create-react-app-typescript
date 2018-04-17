# `pretty-typed-react-starter` [![npm version](https://badge.fury.io/js/pretty-typed-react-starter.svg)](https://badge.fury.io/js/pretty-typed-react-starter)

Create React apps (with Typescript) with no build configuration.

 * [Getting Started](#tldr) – How to use 'create react app'.

_Do you know react and want to try out typescript? Or do you know typescript and want to try out react?_ Get all the benefits from `create-react-app` but you use typescript! 🚀

## How to start

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version pretty-typed-react-starter
cd my-app/
npm start or yarn start
```

## About

This is a variation of the 'create react app' with custom scripts and template. It includes:
- [TypeScript](https://www.typescriptlang.org/) 
- [Prettier](https://prettier.io/) - *note:* replaced ES/TSlint. To make it work you need to install it in your editor (for more info check out the official documentation)
- [MobX](https://mobx.js.org/) - Easier than Redux yet equally powerfull and fun to use.
- [React Loadable](https://github.com/jamiebuilds/react-loadable) - Code-splitting made easy. Works great with current webpack configuration from create react app. Example included in the template.
- [Sass](https://sass-lang.com/) - CSS preprocessor with `node-sass-chokidar` package
- [React Router](https://github.com/ReactTraining/react-router) 

## Project structure
```
my-app
├── README.md
├── node_modules
├── tsconfig.json
├── images.d.ts
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── index.tsx
    └── registerServiceWorker.ts
    └── Components
        └── Content
            └── dynamic.tsx
            └── index.tsx
            └── types.ts
            └── styles.scss
        └── ...
    └── Containers
        └── ContentContainer
            └── dynamic.tsx
            └── index.tsx
            └── types.ts
            └── styles.scss
        └── ...
    └── Utils
        └── colors.scss
        └── constants.ts
        └── helpers.ts
        └── store.ts
```

## Concept

The project structure is created with separation of logic from view and code-splitting in mind.
Ideally you keep your logic in the `Containers` and view in `Components`.
Typical structure for a `Container/Component` would be :
```
Container/Component
    └── index.tsx (main file)
    └── dynamic.tsx (dynamically loaded export made from react-loadable
    └── types.ts (exported types)
    └── styles.scss (styles for that specific Container/Component)
```
