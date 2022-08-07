const chalk = require("chalk").default;
const yargs = require("yargs");
const { addNotes, removeNotes } = require("./notes");

// create add command
yargs.command({
  command: "add",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Add a new note",
  handler: function (argv) {
    addNotes(argv.title, argv.body);
    console.log(chalk.bgGreen("Adding Note"));
  },
});
//remove note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNotes(argv.title);

    console.log(chalk.red("Removing a note"));
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: function () {
    console.log("Listing all notes");
  },
});

yargs.parse();
