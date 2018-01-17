var slideInterval = 3500;

function getFigures() {
    // Get the number of children under section element
    var myImages = document.getElementById('carousel').children;

    //return the array collection
    return myImages;
    
}

/**
 * Removes the class name visible
 */
function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }

    /**
     * Takes the pointer back to zero
     */
    if (++pointer == figures.length) {
        pointer = 0;
    }

    // Adds the class visible to the next image
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

/**
 * Call the moveForward function so
 * the next image is displayed
 */
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();