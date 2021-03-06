import figlet from "figlet";
import gradient = require("gradient-string");
import boxen = require("boxen");
import ProgressBar from "progress";
import chalk = require("chalk");
import { Processor } from "../processor/Processor";
const Sentry = require("@sentry/node");

export class Reporter {
  public progressBar!: ProgressBar;

  constructor(config: any, options: any) {
    Sentry.init({
      dsn: "https://d8d9d7aef3594c6388835cdaf834b781@sentry.io/1510035"
    });
    const borderStyle = boxen.BorderStyle.Double;
    console.clear();
    console.log(
      boxen(
        gradient.pastel(
          figlet.textSync("react-scripts-reporter", {
            font: "Slant"
          })
        ),
        { borderStyle, float: "center", padding: 1 }
      )
    );
  }

  public onRunStart(results: any, options: any) {
    this.progressBar = new ProgressBar(":percent", {
      total: results.numTotalTestSuites
    });
  }

  public onTestResult(testRunConfig: any, testResults: any, runResults: any) {
    this.progressBar.tick();
  }

  public onRunComplete(contexts: any, results: jest.AggregatedResult) {
    const {
      numFailedTestSuites,
      numFailedTests,
      numPassedTestSuites,
      numPassedTests,
      numPendingTestSuites,
      numPendingTests
    } = results;

    console.log(chalk.default.green("COMPLETE"));
    console.log(
      "Number of Failed Test Suites: " +
        (numFailedTestSuites > 0
          ? chalk.default.red(`${numFailedTestSuites}`)
          : chalk.default.green(`${numFailedTestSuites}`))
    );
    console.log(
      "Number of Failed Tests: " +
        (numFailedTests > 0
          ? chalk.default.red(`${numFailedTests}`)
          : chalk.default.green(`${numFailedTests}`))
    );
    console.log(
      "Number of Passed Test Suites: " +
        (numPassedTestSuites === 0
          ? chalk.default.red(`${numPassedTestSuites}`)
          : chalk.default.green(`${numPassedTestSuites}`))
    );
    console.log(
      "Number of Passed Tests: " +
        (numPassedTests === 0
          ? chalk.default.red(`${numPassedTests}`)
          : chalk.default.green(`${numPassedTests}`))
    );
    console.log(
      "Number of Skipped Test Suites: " +
        chalk.default.yellow(`${numPendingTestSuites}`)
    );
    console.log(
      "Number of Skipped Tests: " + chalk.default.yellow(`${numPendingTests}`)
    );

    Processor.run(results, {});
  }
}
