import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const TASK_TEST = "test";
const NEOTEST_HARDHAT_REPORTER_PATH = "./node_modules/hardhat-neovim/neotest-hardhat-reporter.js"

task(TASK_TEST)
  .addFlag("neovim","flag to run test using neotest-hardhat-reporter and produce json output easily consumable by the neotest-hardhat adapter")
  .setAction(async function(args: any, hre: HardhatRuntimeEnvironment, runSuper: any) {
    if (args.neovim) {
      hre.config.mocha.reporter = NEOTEST_HARDHAT_REPORTER_PATH
      await runSuper(args);
    } else {
        await runSuper(args);
    }
})
