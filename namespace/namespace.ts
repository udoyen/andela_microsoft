namespace SomeNamespace {

    export namespace internalNamespace {
        export let internalVariable = "string";
    }
    export let someVariable = "string";
    export function someFunction() {

    }

    export class someClass {

    }
}

SomeNamespace.internalNamespace.internalVariable;
SomeNamespace.someFunction();
let localVariable = SomeNamespace.someVariable;
let instanceClass = new SomeNamespace.someClass;