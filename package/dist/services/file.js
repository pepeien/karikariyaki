var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.toBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = reject;
        });
    };
    return FileService;
}());
export { FileService };
