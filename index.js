import "core-js/stable"; //must include this, otherwise Babel does not work.
import "regenerator-runtime/runtime"; //must include this, otherwise Babel does not work.
import vfile from "to-vfile";
import fs from 'fs';
import unified from "unified";
import markdown from 'remark-parse'

const processor = unified().use(markdown)
const data = JSON.stringify(processor.parse(vfile.readSync("./example.md")));

fs.writeFile('output.json', data, {encoding: "utf-8"}, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});