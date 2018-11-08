/*
 * Examples from README.md
 */

class Tile {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

class ControllableTile extends Tile {
    constructor(x, y, type) {
        super(x, y, type);
    }

    handleEvent(evt) {
        if (evt.type === "keypress") {
            switch (evt.key) {
                case "ArrowLeft": 
                    this.x--;
                    break;
                case "ArrowRight":
                    this.x++;
                    break;
                case "ArrowUp":
                    this.y--;
                    break;
                case "ArrowDown":
                    this.y++;
                    break;
            }

        }
    }
}

/* 
 * Practice: From Prototype to Class
 * We've written PushableTile as a prototype for you below. Your task is to
 * convert it to an ES6 class, much as we did with ControllableTile above.
 */

// function PushableTile(x, y, type) {
//     Tile.call(this, x, y, type);
// }

// PushableTile.prototype = Object.create(Tile.prototype);

// PushableTile.prototype.push = function(x, y) {
//     this.x += x;
//     this.y += y;
// };

class PushableTile extends Tile {
    constructor(x, y, type) {
        super(x, y, type)
    };
    push(x, y) {
        this.x += x;
        this.y += y;
    };
};

/*
 * Practice: From Class to Prototype
 * Similarly, we've written a class for SolidTile, would like you to
 * convert it to use prototypes instead.
 */

// class SolidTile extends Tile {
//     constructor(x, y, type) {
//         super(x, y, type);
//         // Will be checked to see if a tile can be pushed or not. Remember that
//         // undefined is falsey, so we don't need to add this property to other
//         // classes in order for it to do the right thing.
//         this.isSolid = true;
//     }
// }

function SolidTile(x, y, type) {
    Tile.call(x, y, type);
};
SolidTile.prototype = Object.create(Tile.prototype);
SolidTile.isSolid = true;
// console.log(SolidTile.isSolid);

/*
 * Bonus Practice: Prototype from Scratch
 * We didn't bother writing a child prototype for playerTile. If we did though,
 * what would the syntax be? Write a prototype for PlayerTile, giving it
 * whatever new properties or methods you think make sense.
 */
function PlayerTile(x, y, type) {
    ControllableTile.call(x, y, type);
    // handleEvent();
};
PlayerTile.prototype = Object.create(ControllableTile.prototype);
// dont think method is needed b/c inside the controllable ttile? keep line 97?

/* 
 * Practice: Class from Scratch
 * We didn't bother writing a child class for floorTile. If we did though, what
 * would the syntax be? Write a class for FloorTile, giving it whatever new
 * properties or methods you think make sense.
 */