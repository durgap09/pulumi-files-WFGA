const DepGraph = require("dependency-graph").DepGraph;
const pulumi = require("@pulumi/pulumi");
const path = require("path");
const node_modules_path = path.join(__dirname, "node_modules");
const pulumiProgram = require("./pulumiProgram");
const canvasJson = require("./jsonConfig.json");
pulumiProgram(canvasJson, DepGraph, pulumi, node_modules_path)();
