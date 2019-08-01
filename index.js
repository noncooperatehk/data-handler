import "@babel/polyfill"; //must include this, otherwise Babel does not work.
import vfile from "vfile";
const a = 0;
let b = a + 1;

async function nani() {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    });
    console.log(result);
}

nani().catch(e => console.log(e.stack));