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
// const FloorTile = new SolidTile(x, y, type);
// ORRR
class FloorTile extends SolidTile {
    constructor(x, y, type) {
        super(x, y, type);
    };
};
// ORRR MAKE just extends/new Tile?



/*
// AS PROTOTYPE
function Tile(x, y, type) {
    this.x = x;
    this.y = y;
    // type helps determine the postitioning (?Stateic vs absoleute) and background color of tile once drawn
    this.type = type;
  };
// these tiles are drawn, no interaction
const floor = new Tile(0, 0, "floor");
const storage = new Title(2, 5, "storage");
// Tile.call(...) = call Tile constructor method, but attach results to the ControllableTile instead of Tile
function ControllableTile(x, y, type) {
Tile.call(x, y, type);
};
// inherit functionality from Tile 
ControllableTile.prototype = Object.create(Tile.prototype);
// controlablleTitle controllable
ControllableTile.prototype.handleEvent = function(evt) {
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
};
// player associate with dom
const playerElement = document.getElementById("player");
const playerTile = new ControllableTile(0, 0, "player");
playerElement.addEventListener("keypress", playerTile, false);


// AS CLASS
// constructor of a class is explicit, and that the whole thing is inside this new class construct, delimited by a block (opening and closing curly braces)
class Tile = {
constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
};
};
const floor = new Tile(0, 0, "floor");
const storage = new Tile(2, 5, "storage");
// extends ~= ControllableTile.prototype = Object.create(Tile.prototype);
class ControllableTile extends Tile {
constructor(x, y, type) {
    // super = Tile.call()
    super(x, y, type);
};
// methods are handled inside constructor 
handleEvent(event) {
    if(event.type = "keypress") {
    switch (event.key) {
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
    };
    };
};
};
const playerElement = document.getElementById("player");
const playerTile = new ControllableTile(0, 0, "player");
playerElement.addEventListener("keypress", playerTile, false);
*/