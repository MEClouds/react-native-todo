## Session 01

Todo :

- [x] setup expo app ( bun expo install expo-dev-client)
- [x] run (bun run reset-project)
- [x] add assets and Colors

  /constant/Color.ts

  ```
  export const Colors = {
    primary: "#dc4c3e",
    secondary: "#D88E2E",
    background: "#fff",
    backgroundAlt: "#f5f5f5",
    dark: "#635E5E",
    lightText: "#a6a6a6",
    lightBorder: "#d9d9d9",
  }

  export const DATE_COLORS = {
    today: "#2f9d23",
    tomorrow: "#9d6023",
    weekend: "#233d9d",
    other: "#54239d",
  }

  export const PROJECT_COLORS = [
    "#0079bf",
    "#d29034",
    "#519839",
    "#b04632",
    "#89609e",
    "#cd5a91",
    "#4bbf6b",
    "#00aecc",
    "#838c91",
  ]

  export const DEFAULT_PROJECT_COLOR = PROJECT_COLORS[0]

  ```

```

     my-app
     ├── .gitignore
     ├── app
     │ ├── index.tsx
     │ └── \_layout.tsx
     ├── app.json
     ├── assets
     │ ├── documents
     │ │ ├── images
     │ │ └── session-01.md
     │ ├── fonts
     │ │ └── SpaceMono-Regular.ttf
     │ └── images
     │ ├── adaptive-icon.png
     │ ├── favicon.png
     │ ├── icon-blue.png
     │ ├── icon-dark.png
     │ ├── icon-green.png
     │ ├── icon.png
     │ ├── login.png
     │ ├── splash-icon.png
     │ ├── splash.png
     │ └── todoist-logo.png
     ├── bun.lockb
     ├── constants
     │ └── Color.ts
     ├── expo-env.d.ts
     ├── package.json
     ├── README.md
     └── tsconfig.json

```
