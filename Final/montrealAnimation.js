const montrealSizedBoxSize = 360;

function montrealAnimateIn() {
    document.getElementById("montrealStack").style.visibility = "visible";

    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("montrealSizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (montrealSizedBoxSize - (montrealSizedBoxSize * fraction)).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = "0vh"; // Set final height
            });

            window.location.href = "montreal.html";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}

function montrealAnimateOut() {
    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("montrealSizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (montrealSizedBoxSize * fraction).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = montrealSizedBoxSize.toString() + "vh"; // Set final height
            });

            document.getElementById("montrealStack").style.visibility = "collapse";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}
