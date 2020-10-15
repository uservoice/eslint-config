# @uservoice/eslint-config

A common ESLint configuration for JavaScript/TypeScript projects at UserVoice

---

### New Project Usage

Make sure the UserVoice NPM registry is discoverable in the project:

```
//> .npmrc

registry=https://npm.pkg.github.com/uservoice
```

Install the dependency:

```
npm install -D @uservoice/eslint-config
```

Set the ESLint configuration:

```
//> .eslintrc.js

module.exports = {
  extends: ['@uservoice'],
};
```

## Contributing (Publishing Changes)

Changing linting rules requires changing the package.json version property. Check the
[ESLint semantic versioning policy](https://openbase.io/js/eslint-config-eslint/documentation#semantic-versioning-policy)
for good guidelines for versioning a linter configuration.

#### "Testing" Configuration Changes

To test modifications to linting rules, developers can utilize the /rules folder as a sandbox. See
[TailwindRuleTest.tsx](/rules/TailwindRuleTest.tsx) for an example.

#### "Staging" Configuration Changes

What if you want to test linting changes on an existing project before pushing to the `main` branch?

To authenticate to GitHub's NPM registry, use the npm login command, replacing USERNAME with your GitHub username, TOKEN
with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

Next, change the version in `package.json` to a staging-friendly number, i.e. `2.0.1-beta.0`
