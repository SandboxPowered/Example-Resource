sandbox.on('onResourceLoad', () => {
    console.log("Loading Example Resource Server")
})

sandbox.on('recipes', (manager) => {
    manager.remove({type: 'minecraft:campfire'})
})