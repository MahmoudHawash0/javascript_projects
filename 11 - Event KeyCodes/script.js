const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
            <div class="key">
                ${event.key === ' ' ? 'Space' : event.key}
                <small>e.key</small>
            </div>
            <div class="key">
                ${event.keyCode}
                <small>e.keyCode</small>
            </div>
            <div class="key">
                ${event.code}
                <small>e.code</small>
            </div>
    `
})