sandbox.on('items', (manager) => {
    manager.add('test_item', {
        archetype: 'item' // Optional; defaults to 'item'
    })
})

const state = sandbox.getStateProperty('test', 'boolean')

sandbox.on('blocks', (manager) => {
    manager.add('test_block', {
        archetype: 'block', // Optional; defaults to 'block'
        properties: {
            material: 'stone', // Optional; defaults to 'air'
            state: [state] // Optional; defaults to []
        }
    })
})