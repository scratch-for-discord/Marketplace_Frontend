const socket = io('/')
const dashboardBtn = document.getElementById('download-btn-00000000000001')
const createUuid = document.querySelector('#create-uuid')
const loginInfo = document.getElementById('login-info')
const login = "Login"
loginInfo.innerHTML = login
createUuid.addEventListener('click', () => {
    socket.emit('createUuid')
})
dashboardBtn.addEventListener('click', () => {
    socket.emit('downloaded-dashboard')
    alert('Downloaded')
})
socket.on('download-error', (e) => {
    alert('There was an error while saving to mongo DB please try again')
})
socket.on('uuidCreated', (uuid) => {
    alert(`Your uuid is ${uuid}`)
})
socket.emit('isUserLoggedIn')
socket.on('userLoggedIn', (user) => {
    loginInfo.innerHTML = user || "Login"
})