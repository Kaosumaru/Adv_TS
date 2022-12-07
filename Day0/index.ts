import { readFileSync } from "fs";
import _ = require("lodash");

let data = readFileSync('Day0/data.txt', 'utf8');
let lines = data.split("\n");

let sum = _.chain(lines)
            .map(line => Number(line))
            .sum()
            .value();

console.log(sum);
