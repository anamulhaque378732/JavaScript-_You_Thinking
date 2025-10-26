const btn = document.getElementById('btn');

// debounce handler

function debounce(fn, delay) {
    let timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        };
        timeoutId = setTimeout(() => {
            fn()
        }, delay)
    };
};

btn.addEventListener("click", debounce(function () {
    console.log("clicked");

}, 500));






