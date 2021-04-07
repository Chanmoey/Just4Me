import{color} from "../config/color";

class GetRandomColor {
    static getColor(){
        return color[Math.round(Math.random()*color.length)]
    }
}

export {
    GetRandomColor
}