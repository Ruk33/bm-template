const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')
const kebabCase = require('lodash/kebabCase')
const readline = require('readline')
const fs = require('fs');

function printHelp() {
    console.log('BlackMountain - Component generator')
    console.log('Usage: <name>');
    console.log('');
    console.log('Example: form');
    console.log('Example: form-input');
}

function createComponent({ componentName, path }) {
    const template = fs.readFileSync('./scripts/component/template.js', { encoding: 'utf8' });
    const newComponent = template.replace('COMPONENT_NAME', componentName)
    fs.mkdirSync(path.replace('/index.js', ''), { recursive: true })
    fs.writeFileSync(path, newComponent, { encoding: 'utf-8' })
    fs.writeFileSync(
        path.replace('index.js', 'style.module.scss'),
        '@import "../config";',
        { encoding: 'utf-8' }
    )
}

function handler(params) {
    const [node, script, name] = params
    if (!name) return printHelp()

    console.log('')
    console.log('OK, I will generate the following');
    console.log('')

    const componentName = upperFirst(camelCase(name))
    console.log(`Component name: ${componentName}`);

    const componentFile = kebabCase(name)
    const componentFilePath = `./src/components/${componentFile}/index.js`
    console.log(`Component location: ${componentFilePath}`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('')
    rl.question('Proceed? (y)', (answer) => {
        if (answer.toLocaleLowerCase() !== 'y') {
            rl.close();
            return
        }

        createComponent({ componentName, path: componentFilePath })

        rl.close();
    });
}

handler(process.argv)