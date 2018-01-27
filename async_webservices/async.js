var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function callAPI() {
    fetch("https://reqres.in/api/users")
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        console.log(response.parameter);
    });
}
function callAPI_Async() {
    return __awaiter(this, void 0, void 0, function* () {
        var apiReturn = yield fetch("https://reqres.in/api/users");
        var apiJson = yield apiReturn.json();
        console.log(apiJson.parameter);
    });
}
