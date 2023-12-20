const quebecCitySizedBoxSize = 720;

function quebecCityAnimateIn() {
    document.getElementById("quebecCityStack").style.visibility = "visible";

    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("quebecCitySizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (quebecCitySizedBoxSize - (quebecCitySizedBoxSize * fraction)).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = "0vh"; // Set final height
            });

            window.location.href = "quebecCity.html";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}

function quebecCityAnimateOut() {
    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("quebecCitySizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (quebecCitySizedBoxSize * fraction).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = quebecCitySizedBoxSize.toString() + "vh"; // Set final height
            });

            document.getElementById("quebecCityStack").style.visibility = "collapse";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}
