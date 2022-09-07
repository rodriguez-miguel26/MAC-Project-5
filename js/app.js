const picseacrh = document.getElementById('picseacrh');
picseacrh.addEventListener('keyup', e => {
    let currentValue= e.target.value.toLowerCase();
    console.log(currentValue);
});