import { task } from "hardhat/config";

const TASK_TEST = "test";
const NEOTEST_HARDHAT_REPORTER_PATH = "./node_modules/hardhat-neovim/neotest-hardhat-reporter.js"

task(TASK_TEST)
  .addFlag("neovim","flag to run test using neotest-hardhat-reporter and produce json output easily consumable by the neotest-hardhat-adapter")
  .setAction(async function(args, hre, runSuper) {
    if (args.neovim) {
      hre.config.mocha.reporter = NEOTEST_HARDHAT_REPORTER_PATH
      await runSuper(args);
    }
})
