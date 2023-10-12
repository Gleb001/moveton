// imports ================================================== //
// types ---------------------------------------------------- //
import type { Properties, ValidProperty } from "../../shared/types/index.d.ts";
// helpers -------------------------------------------------- //
import { createKeyframesAnimation } from "./createKeyframesAnimation";

// main ===================================================== //
export function createFileAnimationCSS(
    props: Properties<ValidProperty>,
    name: string
) {
    let css_file = document.createElement("style");
    css_file.innerText = createKeyframesAnimation(props, name);
    return css_file;
}