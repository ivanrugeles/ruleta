document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.querySelector('.wheel');
    const randomDegree = Math.floor(Math.random() * 360);
    const spinDuration = 3000; // 3 segundos

    // Calculamos la rotación final
    const spinRotation = 3600 + randomDegree; // Mínimo 10 giros para la sensación de aleatoriedad
    wheel.style.transition = `transform ${spinDuration}ms cubic-bezier(0.33, 0, 0.66, 1)`;
    wheel.style.transform = `rotate(${spinRotation}deg)`;

    // Reiniciamos la transición después de que termina
    setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        // Para reiniciar la transición en el siguiente giro
        setTimeout(() => {
            wheel.style.transition = `transform ${spinDuration}ms cubic-bezier(0.33, 0, 0.66, 1)`;
        }, 50);
    }, spinDuration);
});
document.getElementById('update').addEventListener('click', function() {
    updateSegmentText();
    limpiarCaja();
})
function updateSegmentText() {
    document.getElementById('segment1').textContent = document.getElementById('input1').value || '1';
    document.getElementById('segment2').textContent = document.getElementById('input2').value || '2';
    document.getElementById('segment3').textContent = document.getElementById('input3').value || '3';
    document.getElementById('segment4').textContent = document.getElementById('input4').value || '4';
}
function limpiarCaja() {
    document.querySelector('#input1').value = '';
    document.querySelector('#input2').value = '';
    document.querySelector('#input3').value = '';
    document.querySelector('#input4').value = '';
}