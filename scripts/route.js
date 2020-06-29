const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')
const readline = require('readline')
const fs = require('fs');

function printHelp() {
    console.log('BlackMountain - Route generator')
    console.log('Usage: bm route <guest|auth> <name> <uri>');
    console.log('');
    console.log('Example: bm route guest home /home');
    console.log('Example: bm route auth profile /profile');
    console.log('Example: bm route auth show-post /posts/:id');
    console.log('Example: bm route auth show-post /posts/:user/:id/delete');
}

function createRouteComponent({ componentName, path }) {
    const template = fs.readFileSync('./scripts/template.js', { encoding: 'utf8' });
    const newComponent = template.replace('COMPONENT_NAME', componentName)
    fs.mkdirSync(path.replace('/index.js', ''), { recursive: true })
    fs.writeFileSync(path, newComponent, { encoding: 'utf-8' })
}

function addRouteToRoutes({ type, uri, component, path }) {
    const routesPath = './src/pages/routes.js'
    const routes = fs.readFileSync(routesPath, { encoding: 'utf8' });
    let newRoutes = routes

    newRoutes = newRoutes.replace(
'// END IMPORTS',
`import ${component} from '${path}'
// END IMPORTS`
    )

    newRoutes = newRoutes.replace(
'// END ROUTES',
`routes.${type}.routes.push({ uri: '${uri}', component: ${component} })
// END ROUTES`
    )

    fs.writeFileSync(routesPath, newRoutes, { encoding: 'utf-8' })
}

function handler(params) {
    const [node, script, bm, route, type, name, uri] = params
    if (!type || !name || !uri) return printHelp()

    console.log('')
    console.log('OK, I will generate the following');
    console.log('')

    const routeType = type.toLowerCase() === 'auth' ? 'auth' : 'guest'

    if (routeType === 'auth') console.log('Route for: AUTHENTICATED users only');
    else console.log('Route for: GUEST users');

    const componentName = upperFirst(camelCase(`${name} page`))
    console.log(`Component name: ${componentName}`);

    const routeWithoutParams = uri.replace(/\/\:[a-z-_]+/gi, '')
    const routeFilePath = `./src/pages/${routeType}${routeWithoutParams}/index.js`
    console.log(`Component location: ${routeFilePath}`);

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

        createRouteComponent({ componentName, path: routeFilePath })
        addRouteToRoutes({
            type: routeType,
            uri,
            component: componentName,
            path: `./${routeType}${uri}`
        })

        rl.close();
    });
}

handler(process.argv)