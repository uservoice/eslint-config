# @uservoice/eslint-config

A common ESLint configuration for JavaScript/TypeScript projects at UserVoice

---

### Installation

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

Attach a `-beta.0` version (incrementing as necessary) to `package.json`, and push your changes to the 
`beta` branch. This 
will 
kick 
off a
GitHub CI action to publish the beta version to the registry.

> NOTE: In the future, the staging workflow may be improved such that versioning is more automated.

#### Publishing Configuration Changes

Remove any `-beta` version tags in the beta branch and create a pull request from the `beta` branch to `main`. Once 
pushed, the new package should be bundled and available in a matter of minutes.
