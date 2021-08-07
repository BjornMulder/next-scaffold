# Next Scaffold
![license]( https://img.shields.io/github/license/BjornMulder/next-scaffold )
![version](https://img.shields.io/npm/v/next-scaffold)

## About
Next Scaffold is a real simple package to save you the hassle of creating file after file when working with components.
Just specify what files you want for all your components once, and let us generate all files for you.

## Install
```
npm install next-scaffold --save-dev
```

Next up we'll add the script to our package.json: 
```
    "scripts": {
        "scaffold": "next-scaffold"
    },
```

## Usage

Before we start scaffolding, we should decide on what we want to generate. 
next-scaffold uses a scaffold-format.json in the root of your project to decide what it should do for you.

The format of your format file should look like this: 

```
{
  "components": [
    ["", ".tsx"],
    ["__stories__", ".stories.tsx"],
    ["__tests__", ".spec.tsx"]
  ]
}
```

Within the components array you can specify a list of files that should be created for you. 
Where the first argument is a (sub)directory to place your file, and the second being the suffix to your component name.

When that's all set, you can just specify the path and name of your new component when calling scaffold like this:
```
npm run scaffold src/components/TestComponent
```

With the scaffold-format.json and commands above, you'll end up with 3 new files ready for use.
```
<project-root>/src/components/testComponent.tsx
<project-root>/src/components/__stories__/testComponent.stories.tsx
<project-root>/src/components/__tests__/testComponent.spec.tsx
```
