import 'regenerator-runtime/runtime'
const a = 0;
let b = a + 1;
console.log(b);

async function nani() {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    });
    console.log(result);
}

nani().catch(e => console.log(e.stack));