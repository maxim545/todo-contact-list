/* function makePhoneMask() {
    document.addEventListener("DOMContentLoaded", function () {
        const eventCalllback = function (e) {
            let el = e.target,
                clearVal = el.dataset.phoneClear,
                pattern = el.dataset.phonePattern,
                matrix_def = "+7(___) ___-__-__",
                matrix = pattern ? pattern : matrix_def,
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = e.target.value.replace(/\D/g, "");
            if (clearVal !== 'false' && e.type === 'blur') {
                if (val.length < matrix.match(/([\_\d])/g).length) {
                    e.target.value = '';
                    return;
                }
            }
            if (def.length >= val.length) val = def;
            e.target.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
        }
        const phoneInput = document.querySelector('[data-phone-pattern]');
        for (let elem of phoneInput) {
            for (let ev of ['input', 'blur', 'focus']) {
                elem.addEventListener(ev, eventCalllback);
            }
        }
    });
}

makePhoneMask();

export default makePhoneMask; */