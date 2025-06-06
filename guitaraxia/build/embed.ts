import {NamedValue} from "./namedValue.ts";

const embedStart = "{";
const embedEnd = "}";

export function embed(source: string, embeddings: NamedValue[]): string {
    let start = 0;
    while (true) {
        start = source.indexOf(embedStart, start);
        if (start < 0) {
        }
        let end = source.indexOf(embedEnd, start);
        if (end < 0) {
            
        }
    }
    return "";
}