import { readFileSync } from "fs";
import _ = require("lodash");

let data = readFileSync('Day0/data.txt', 'utf8');
let lines = data.split("\n");

// 'manual' version
let sum = 0;
for (let line of lines)
{
   let number = Number(line);
   sum += number;
}

console.log(sum);

// 'lodash' version
let l_sum = _.chain(lines)
            .map(line => Number(line))
            .sum()
            .value();

console.log(l_sum);
