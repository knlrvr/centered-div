document.addEventListener('DOMContentLoaded', function() {

    const div = document.getElementById('calculate-center');

    function calculateCenter(total, size) {
        let start = 0;
        let end = total - size;
        while (end - start > 1) {
            let mid = Math.floor((start + end) / 2);
            if (mid + size / 2 < total / 2) {
                start = mid;
            } else {
                end = mid;
            }
        }
        return Math.floor((start + end) / 2);
    }

    function centerDiv() {

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const divWidth = div.offsetWidth;
        const divHeight = div.offsetHeight;

        const leftPosition = calculateCenter(viewportWidth, divWidth);
        const topPosition = calculateCenter(viewportHeight, divHeight);

        div.style.left = leftPosition + 'px';
        div.style.top = topPosition + 'px';
    }

    centerDiv();

    window.addEventListener('resize', centerDiv);
}); 