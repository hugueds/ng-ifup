export class Utils {
    static toCamel(o): any {
        let newO, origKey, newKey, value;
        if (o instanceof Array) {
            return o.map(function (val) {
                if (typeof val === 'object') {
                    val = this.toCamel(val);
                }
                return val;
            });
        } else {
            newO = {};
            for (origKey in o) {
                if (o.hasOwnProperty(origKey)) {
                    newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1)).toString();
                    if (origKey === 'NPR' || origKey === 'NCG') {
                        newKey = newKey.toLowerCase();
                    }
                    if (origKey === 'ADAproval' || origKey === 'RCNumber' || origKey === 'RCStatus') {
                        const firstLetter = newKey.charAt(0);
                        newKey = (firstLetter + origKey.charAt(1).toLowerCase() + origKey.slice(2)).toString();
                    }
                    value = o[origKey];
                    if (value instanceof Array || (value !== null && value.constructor === Object)) {
                        value = this.toCamel(value);
                    }
                    newO[newKey] = value;
                }
            }
        }
        return newO;
    }

}
