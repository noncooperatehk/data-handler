
import vfile from "to-vfile";
import unified from "unified";
import parse from "remark-parse";
import stringify from "remark-stringify";
import frontmatter from "remark-frontmatter";
import yaml from "js-yaml";
import _ from "lodash"

const parser = unified()
    .use(parse)
    .use(stringify)
    .use(frontmatter, ['yaml']);

function yamlFrontMatterToJson(unifiedNode) {
    let firstChild = _.get(unifiedNode, 'children[0]');
    if (!firstChild) return {};
    if (!(firstChild.type === 'yaml' && firstChild.value)) return {};
    return yaml.safeLoad(firstChild.value);
}

async function parseFrontMatter(filename) {
    let file = await vfile.read(filename);
    let parsed = parser.parse(file);
    return yamlFrontMatterToJson(parsed);
}

export default {
    //return a json object
    parseFrontMatter: parseFrontMatter
}