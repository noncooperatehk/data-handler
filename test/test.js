import "core-js/stable"; //must include this, otherwise Babel does not work.
import "regenerator-runtime/runtime"; //must include this, otherwise Babel does not work.
import frontMatterParser from "../frontMatterParser";
//test code
frontMatterParser.parseMdFileFrontMatter(__dirname + "/VitaGreen.md").then(e => console.log(e)).catch(e => console.log(e.stack));

let testContent = "---\n test:1\n --- mdContent"
frontMatterParser.parseFrontMatterString(testContent).then(e => console.log(e)).catch(e => console.log(e.stack));

// fs.writeFile('output.json', data, {encoding: "utf-8"}, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });