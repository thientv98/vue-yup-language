"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;
var printValue_1 = require('./printValue.js');
exports.mixed = {
    default: '${path}는 올바르지 않습니다.',
    required: '${path}가 필요합니다.',
    oneOf: '비밀번호가 일치하지 않습니다',
    notOneOf: '${path}는 다음 값이 아니어야 합니다: ${values}',
    notType: function (_a) {
        var path = _a.path, type = _a.type, value = _a.value, originalValue = _a.originalValue;
        var isCast = originalValue != null && originalValue !== value;
        var msg = path + "\uB294 `" + type + "` \uD0C0\uC785\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. " +
            ("\uADF8\uB7EC\uB098 \uCD5C\uC885 \uAC12\uC740 `" + printValue_1.default(value, true) + "`\uC785\uB2C8\uB2E4") +
            (isCast
                ? " (\uAC12 `" + printValue_1.default(originalValue, true) + "`\uB85C \uBD80\uD130 \uBCC0\uD658 \uB428)."
                : '.');
        if (value === null) {
            msg += "\n \uB9CC\uC57D \"null\"\uC774 \uBE48 \uAC12\uC73C\uB85C \uC758\uB3C4 \uB41C \uACBD\uC6B0 \uC2A4\uD0A4\uB9C8\uB97C `.nullable()`\uB85C \uD45C\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4.";
        }
        return msg;
    },
    defined: '${path}가 정의되어야 합니다.'
};
exports.string = {
    length: '${path}는 ${length} 글자여야 합니다.',
    min: '${min} 자 이상으로 입력해주세요.',
    max: '${max}자 이하로 입력해주세요. ',
    matches: '${path}는 다음 정규식에 맞아야 합니다: "${regex}"',
    email: '${path}는 올바른 이메일이어야 합니다.',
    url: '${path}는 올바른 URL이어야 합니다.',
    uuid: '${path}는 올바른 UUID이어야 합니다.',
    trim: '${path}는 트림 된 문자열이어야 합니다.',
    lowercase: '${path}는 소문자여야 합니다.',
    uppercase: '${path}는 대문자여야 합니다.'
};
exports.number = {
    min: '${path}는 ${min}보다 크거나 같아야 합니다.',
    max: '${path}는 ${max}보다 작거나 같아야 합니다.',
    lessThan: '${path}는 ${less}보다 작아야 합니다.',
    moreThan: '${path}는 ${more}보다 커야 합니다.',
    positive: '${path}는 양수여야 합니다.',
    negative: '${path}는 음수여야 합니다.',
    integer: '${path}는 정수여야 합니다.'
};
exports.date = {
    min: '${path}는 ${min}의 이후여야 합니다.',
    max: '${path}는 ${max}의 이전이어야 합니다.'
};
exports.boolean = {
    isValue: '${path}는 ${value}여야 합니다.'
};
exports.object = {
    noUnknown: '${path}에 다음 정의되지 않은 키가 있습니다: ${unknown}'
};
exports.array = {
    min: '${path}는 최소 ${min}개의 원소를 가져야합니다.',
    max: '${path}는 최대 ${max}개의 원소를 가져야합니다.',
    length: '${path}는 ${length}개의 원소를 가져야합니다.'
};
var yupLocaleKo = {
    mixed: exports.mixed,
    string: exports.string,
    number: exports.number,
    date: exports.date,
    object: exports.object,
    array: exports.array,
    boolean: exports.boolean
};
exports.default = yupLocaleKo;
