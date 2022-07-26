var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import common from '../../Common/Simple.edit.validation';
export default __spreadArray(__spreadArray([], common, true), [
    {
        weight: 110,
        key: 'validate.minLength',
        label: 'Minimum Length',
        placeholder: 'Minimum Length',
        type: 'number',
        tooltip: 'The minimum length requirement this field must meet.',
        input: true,
    },
    {
        weight: 120,
        key: 'validate.maxLength',
        label: 'Maximum Length',
        placeholder: 'Maximum Length',
        type: 'number',
        tooltip: 'The maximum length requirement this field must meet.',
        input: true,
    },
], false);
