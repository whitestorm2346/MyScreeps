module.exports = {
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity){
            var sources = creep.room.find(FIND_SOURCES)
            
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[0])
            }
        }
        else {
            var spawn = Game.spawns['Spawn1']

            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(spawn)
            }
        }
    }
};