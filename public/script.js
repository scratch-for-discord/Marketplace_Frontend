const socket = io('/')
const dashboardBtn = document.getElementById('download-btn-00000000000001')
dashboardBtn.addEventListener('click', () => {
    socket.emit('downloaded-dashboard')
    alert('Downloaded')
})