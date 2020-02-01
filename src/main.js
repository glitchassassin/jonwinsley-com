const ParticleNetwork = require('canvas-particle-network');

document.addEventListener('DOMContentLoaded', () => {
    const particleCanvas = new ParticleNetwork(document.querySelector('#particleCanvas'), {
        // particleColor: '#888',
        particleColor: '#86a',
        background: '#110e15',
        interactive: false,
        speed: 'slow',
        density: 'high'
    })
});
