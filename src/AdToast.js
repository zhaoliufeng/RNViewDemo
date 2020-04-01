import {NativeModules} from "react-native";

let adToast = NativeModules.AdToast;
export class AdToast{
    static show(msg: string){
        adToast.show(msg, adToast.SHORT);
    }
}


