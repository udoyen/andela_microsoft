var SomeNamespace;
(function (SomeNamespace) {
    var internalNamespace;
    (function (internalNamespace) {
        internalNamespace.internalVariable = "string";
    })(internalNamespace = SomeNamespace.internalNamespace || (SomeNamespace.internalNamespace = {}));
    SomeNamespace.someVariable = "string";
    function someFunction() {
    }
    SomeNamespace.someFunction = someFunction;
    var someClass = (function () {
        function someClass() {
        }
        return someClass;
    }());
    SomeNamespace.someClass = someClass;
})(SomeNamespace || (SomeNamespace = {}));
SomeNamespace.internalNamespace.internalVariable;
SomeNamespace.someFunction();
var localVariable = SomeNamespace.someVariable;
var instanceClass = new SomeNamespace.someClass;
