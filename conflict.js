export function hasConflict(classes,newClass){

    for(let c of classes){

        let sameRoom =
        c.room === newClass.room;

        let overlap =
        newClass.startHour < c.endHour &&
        newClass.endHour > c.startHour;

        if(sameRoom && overlap){
            return true;
        }
    }

    return false;
}