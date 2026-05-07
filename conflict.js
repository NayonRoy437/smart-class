export function hasConflict(classes, newClass){

    // INVALID TIME CHECK
    if(newClass.startHour >= newClass.endHour){

        return {
            conflict: true,
            message: "❌ Invalid Time"
        };
    }

    for(let c of classes){

        // TIME OVERLAP
        let overlap =
        newClass.startHour < c.endHour &&
        newClass.endHour > c.startHour;

        // SAME ROOM
        let sameRoom =
        c.room === newClass.room;

        // SAME TEACHER
        let sameTeacher =
        c.teacher === newClass.teacher;

        if(overlap && sameRoom){

            return {
                conflict: true,
                message: "❌ Room Conflict"
            };
        }

        if(overlap && sameTeacher){

            return {
                conflict: true,
                message: "❌ Teacher Conflict"
            };
        }
    }

    return {
        conflict: false
    };
}
