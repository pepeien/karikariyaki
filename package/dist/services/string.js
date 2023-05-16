var StringService = /** @class */ (function () {
    function StringService() {
    }
    StringService.isStringInsideBoundaries = function (value, minSize, maxSize) {
        if (!value) {
            return false;
        }
        var trimmedValue = value.trim();
        return trimmedValue.length > minSize && trimmedValue.length < maxSize;
    };
    StringService.removeLeadingAndTrailingSlashes = function (value) {
        if (value === undefined || value === null) {
            return;
        }
        var rasterizedRoute = value.trim().toLowerCase().replace(/^\/+/g, "");
        return rasterizedRoute.replace(/\/+$/, "");
    };
    StringService.hasValue = function (value) {
        if (value === undefined || value === null) {
            return false;
        }
        return true;
    };
    return StringService;
}());
export { StringService };
