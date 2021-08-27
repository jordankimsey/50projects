const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = [
    'error',
    'success',
    'info'
]

button.addEventListener('click', (e) => createNotification());

function createNotification(message = null, type = null) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(type ? type : getRandomTypes());

    notification.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)];
}
