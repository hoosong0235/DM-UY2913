function customAnimate(target) {
    document.getElementById("animation").style.visibility = "visible";

    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("sizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (360 - (360 * fraction)).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = "0vh"; // Set final height
            });

            if (target != "") window.location.href = target;
        }
    }

    requestAnimationFrame(animate); // Start the animation
}

function customAnimateReverse() {
    const start = Date.now();
    const duration = 2000; // Duration of the animation in milliseconds
    const sizedBoxes = document.getElementsByClassName("sizedBox");

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate() {
        const elapsed = Date.now() - start;
        let fraction = elapsed / duration;
        fraction = easeInOutCubic(fraction); // Apply easing function

        Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
            sizedBox.style.height = (360 * fraction).toString() + "vh";
        });

        if (elapsed < duration) {
            requestAnimationFrame(animate); // Continue the animation
        } else {
            Array.prototype.forEach.call(sizedBoxes, function(sizedBox) {
                sizedBox.style.height = "360vh"; // Set final height
            });

            document.getElementById("animation").style.visibility = "collapse";
        }
    }

    requestAnimationFrame(animate); // Start the animation
}
