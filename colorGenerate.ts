export default function colorGenerate(text: string, top: number = 212, base: number = 90): string {
    let red = 0;
    let blue = 0;
    let green = 0;
    //step 1 - define top
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }
    if (sum % 3 == 0)
        red = top;
    else if (sum % 3 == 1)
        blue = top;
    else if (sum % 3 == 2)
        green = top;

    //step 2 - define base
    if (text.length % 2 == 0) {
        if (red == 0)
            red = base;
        else if (blue == 0)
            blue = base;
        else if (green == 0)
            green = base;
    }
    else {
        if (green == 0)
            green = base;
        else if (blue == 0)
            blue = base;
        else if (red == 0)
            red = base;
    }
    //step 3 - define variant
    const k = (top + base) / top
    const variValue = (((sum / text.length) + base) / k) | 0;
    if (red == 0)
        red = variValue;
    else if (blue == 0)
        blue = variValue;
    else if (green == 0)
        green = variValue;
    return `rgb(${red},${blue},${green})`;
}
