# hardhat-neovim


This plugin allow the integration of the neotest neovim test framework with hardhat.


## What


This plugin is a simply workaround and ideally it will not be necessary in a future. I 
created it because builtin mocha reporters don't produce an output suitable for efficient
transformation to the structure needed by neotest and because `hardhat test` doesn't allow
to pass directly mocha options, see [these issue](https://github.com/NomicFoundation/hardhat/issues/4307).
I don't like to add an aditional dependency but for know is the only solution that I found to don't mess
with a normal workflow. These plugin code is stupidily small and could be extended to
allow additional integration facilities.


## Installation


Install with you package manager of choice

```bash
pnpm add github:TheSnakeWitcher/hardhat-neovim -D
```

or 

```bash
pnpm add hardhat-neovim -D 
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-neovim");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-neovim";
```


## Required plugins


## Tasks


These plugin only overrides the builtin `test` task to add the `--neovim` flag. If these
flag is enabled test will use the [neotest-hardhat-reporter](https://github.com/TheSnakeWitcher/hardhat-neovim/blob/main/neotest-hardhat-reporter.js)
mocha reporter which produce a json output easilly consumable programmatically and compatible with neotest.


## Environment extensions


## Configuration


## Usage


These plugin isn't mean to be used directly in the cli, it will be used in the background for the
`neotest-hardhat` adapter provided by [hardhat.nvim](https://github.com/TheSnakeWitcher/hardhat.nvim)
neovim plugin.
