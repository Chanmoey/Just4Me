import{color} from "../config/color";

class Get_random_color {
    static getColor(){
        return color[Math.round(Math.random()*color.length)]
    }
}

export {
    Get_random_color
}