# Contributing

Contributions are **welcome** and will be fully **credited**. Here is a little bit you should know, before you send your contribution:

## 😄 Welcome examples
- Failing regression tests as bug reports.
- Documentation improvements, e. g. fix a typo, add a section.
- New features for existing extensions, e. g. a new configureable option.
- Well explained, non-breaking changes to the core.

## 🛠️ Set up the development environment

### Prerequisites
You'll need following installed first:
- Git
- Node
- yarn
- git-cz

```shell
# yarn
sudo npm install -g yarn

# git-cz
sudo npm install -g git-cz
```

### Fork and clone the repo to your local machine
```shell
git clone git@github.com:yourname/pileax.git
```

## 🧑🏻‍💻 Develop and Commit
### Create new feature branch
```shell
git checkout -b feat/new-feature
```

### Code changes
Make specific code changes for your new feature.

### lint, test and build
#### lint
```shell
yarn lint
```
Make sure there are no lint issues, fix it using:
```shell
yarn lint-fix
yarn format
```

#### build
```shell
yarn build
yarn build:electron
```

### Preview
```shell
pnpm preview
```
You may go to http://127.0.0.1:9601 to check if your changes work as expected.


### Commit
Now, it is safe to commit.
```shell
git add .
git cz
```

## 🚀‍ Pull Request
### Push your branch
```shell
git push origin feat/new-feature
```

### Creat PR
We recommend create pr using template:
```shell
gh pr create --title "feat: new feature" --body-file .github/pull_request_template.md
```
Or create [pull request](https://github.com/pileax-ai/pileax/pulls) at Github.

## 📃 Documentation
Documentation is as important as code. Please update the documentation repository corresponding to any alterations you make in the code.

- [Code Repo](https://github.com/pileax-ai/pileax): Modify the code here.
- [Documentation Repo](https://github.com/pileax-ai/pileax-docs): Update or add documentation here to reflect changes made in the Yiitap repository.