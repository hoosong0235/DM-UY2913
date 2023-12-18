const torontoSizedBoxSize = 360;

function torontoAnimateIn() {
    document.getElementById("torontoStack").style.visibility = "visible";

    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("torontoSizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (torontoSizedBoxSize - (torontoSizedBoxSize * fraction)).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = "0vh"; // Set final height
            });

            window.location.href = "toronto.html";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}

function torontoAnimateOut() {
    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("torontoSizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (torontoSizedBoxSize * fraction).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = torontoSizedBoxSize.toString() + "vh"; // Set final height
            });

            document.getElementById("torontoStack").style.visibility = "collapse";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}
