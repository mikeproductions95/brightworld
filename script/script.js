        function openModal(src) {
            document.getElementById('modalImage').src = src;
            document.getElementById('imageModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
        }

        // Close modal when clicking outside the image
        window.onclick = function(event) {
            if (event.target == document.getElementById('imageModal')) {
                closeModal();
            }
        }

        // Function to shuffle array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Randomize related posts on load
        document.addEventListener('DOMContentLoaded', function() {
            const grid = document.getElementById('relatedGrid');
            const items = Array.from(grid.children);
            shuffleArray(items);
            items.forEach(item => grid.appendChild(item));
        });