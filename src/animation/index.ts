// main ===================================================== //
// types ---------------------------------------------------- //
import type { 
    AnimaitonSettings,
    Properties
} from "../shared/types/index.d.ts";
// helpers -------------------------------------------------- //
import { getId } from "./helpers/getId";
import { getValidProperty } from "./helpers/getValidProperty";

// main ===================================================== //
abstract class Animation<TimingFunc> {

    constructor(
        elems: [HTMLElement] | HTMLElement[],
        props: Properties<string>
    ) {
        this._id_animation = getId();

        this._settings.elems = elems;
        for (let name_prop in props) {
            this._settings.props[name_prop] = getValidProperty(props[name_prop]!);
        }
    }

    // public ----------------------------------------------- //
    public abstract end(): Promise<HTMLElement[]>;
    
    public abstract start(
        timing_function: TimingFunc | CSSStyleDeclaration["animation"],
    ): Promise<HTMLElement[]>;
    public abstract start(
        timing_function: TimingFunc,
        duration: number,
        delay?: number
    ): Promise<HTMLElement[]>;


    // protected -------------------------------------------- //
    protected _id_animation: string;
    protected _settings: AnimaitonSettings<TimingFunc> = {
        elems: [],
        props: {},
        timing_function: undefined,
    };

}

// exports ================================================== //
export { Animation };