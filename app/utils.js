//utils.js
/**
 * @returns {string} A random string of characters
 */
export const generateId = function () {
    var result = "";
    var characters =
        //"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        "ABCDEFGHIJKLMONOPQRSTUVWXYZ"
    var charactersLength = characters.length;
    for (var i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        //console.log('the result of generateId()',result);
    }
    return result;
};


