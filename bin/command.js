#! /usr/bin/env node
let shell = require('shelljs');
let appRoot = require('app-root-path').toString();
let read = require('read-data');

const pathInput = process.argv[2];

if (!pathInput) {
    shell.echo("No component path specified");
    return;
}


const componentName = /[^/]*$/.exec(pathInput)[0];

const path = pathInput.replace(componentName, "");

const configLoc = `${appRoot}/scaffold-format.json`;

read(configLoc, "utf8", (err, buffer) => {
    if (!err) {
        buffer.components.map((value) => {
                const fileName = componentName + value[1];
                const componentParts = [appRoot, path, value[0]];
                let componentPath = "";

                componentParts.forEach((part) => {
                    if ((part.charAt(0) !== "/") && (componentPath.charAt(componentPath.length - 1) !== "/")) {
                        componentPath += "/";
                    }

                    componentPath += part;
                });

                shell.mkdir('-p', componentPath);
                shell.touch(componentPath + "/" + fileName);
            });
    }
});
