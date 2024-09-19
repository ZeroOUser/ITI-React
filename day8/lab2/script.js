let htmlElement = document.querySelector(':root');
window.onload = function() {
    if (localStorage.getItem('bodyClr') !== null) 
        htmlElement.style.setProperty('--body-clr', localStorage.getItem('bodyClr'));
    if (localStorage.getItem('baseClr') !== null) 
        htmlElement.style.setProperty('--base-clr', localStorage.getItem('baseClr'));
    if (localStorage.getItem('fontClr')) 
        htmlElement.style.setProperty('--font-clr', localStorage.getItem('fontClr'));
    
    let htmlStyle = getComputedStyle(htmlElement);
    bodyClr.value = htmlStyle.getPropertyValue('--body-clr');
    baseClr.value = htmlStyle.getPropertyValue('--base-clr');
    fontClr.value = htmlStyle.getPropertyValue('--font-clr');
    
}
upBtn.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('hidden');
})
bodyClr.addEventListener('input', function() {
    htmlElement.style.setProperty('--body-clr', localStorage.bodyClr = bodyClr.value)
})
baseClr.addEventListener('input', function() {
    htmlElement.style.setProperty('--base-clr', localStorage.baseClr = baseClr.value);
})
fontClr.addEventListener('input', function() {
    htmlElement.style.setProperty('--font-clr', localStorage.fontClr = fontClr.value);
})