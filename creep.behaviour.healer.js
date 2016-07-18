var behaviour = new MODULES.creep.Behaviour();

behaviour.run = function(creep) {
    var assignment = this.assignActionWithTarget(creep, MODULES.creep.action.healing);
    /*
    if( creep.room.controller.my && creep.room.situation.invasion )
        assignment = this.assignActionWithTarget(creep, MODULES.creep.action.healing);
    else {
        var flag = _.find(Game.flags, {'color': FLAG_COLOR.invade });
        if( flag ) assignment = this.assignActionWithTarget(creep, MODULES.creep.action.invading);
        else assignment = this.assignActionWithTarget(creep, MODULES.creep.action.guarding);
    }
    */
    if( !assignment ) this.assignActionWithTarget(creep, MODULES.creep.action.idle);
    
    if( creep.action ) creep.action.step(creep);
};

module.exports = behaviour;