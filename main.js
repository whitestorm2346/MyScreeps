let role = {
    worker: require('role.worker')
}

module.exports.loop = function () {
    for(var name in Game.creeps){
        var creep = Game.creeps[name]

        if(creep.memory.role == 'worker'){
            role.worker.run(creep)
        }
    }

    // auto release memories
    for(var name in Memory.creeps){
        if(!Game.creeps[name]){
            delete Memory.creeps[name]
        }
    }
}