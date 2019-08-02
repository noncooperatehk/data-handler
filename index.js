import "core-js/stable"; //must include this, otherwise Babel does not work.
import "regenerator-runtime/runtime"; //must include this, otherwise Babel does not work.
import vfile from 'to-vfile'
import frontMatterParser from './frontMatterParser'
import markDownParser from "./markDownParser";

async function splitContent(contentStr) {
    let reg = /(---[\s\S]*---[\s]*)([\s\S]*)/
    return vfile.readSync("VitaGreen.md").toString().match(reg).slice(1, 3); //get the second and the third element
}

async function main() {
    let content = await vfile.readSync("VitaGreen.md").toString();
    let [frontMatter, mdContent] = await splitContent(content);
    let frontMatterJson = await frontMatterParser.parseFrontMatterString(frontMatter)
    let markDownASTJson = await markDownParser.mdStringToAST(mdContent);
}
