'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM content has loaded.');

    const allParagraphs = document.querySelectorAll('p');
    console.log(allParagraphs.length);
    allParagraphs.forEach(function(paragraph, index) {
        console.log(index, paragraph)
        paragraph.classList.add('bold');
        if (index % 2 === 0) {
            paragraph.classList.add('bold')
        }
        const spanElement= document.createElement('span')
        spanElement.innerText = `this paragraph is at index ${index}`
        spanElement.classList.add('bold')
        paragraph.append(spanElement)
    });

})

console.log(foo)