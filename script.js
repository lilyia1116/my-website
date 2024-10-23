<script>
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    document.body.prepend(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleButton.innerText = 'Toggle Light Mode';
        } else {
            toggleButton.innerText = 'Toggle Dark Mode';
        }
    });

    // Set initial mode
    document.body.classList.add('light-mode');
</script>
