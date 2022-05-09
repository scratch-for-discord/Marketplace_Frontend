const socket = io('/')
const btn = document.getElementById('sumit')
btn.addEventListener('click', () => {
    socket.emit('requestLogin')
})