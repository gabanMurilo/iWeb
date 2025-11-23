document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('sampleCheckbox');
    const state = document.getElementById('checkboxState');
    const primary = document.getElementById('primaryBtn');
    const secondary = document.getElementById('secondaryBtn');

    function refresh() { state.textContent = 'Checkbox: ' + (checkbox.checked ? 'on' : 'off'); }
    checkbox.addEventListener('change', refresh);
    refresh();

    primary.addEventListener('click', () => {
        alert('Ação principal executada (demo).');
    });
    secondary.addEventListener('click', () => {
        alert('Ação secundária (demo).');
    });
});
