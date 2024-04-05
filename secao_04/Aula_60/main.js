function recursiva(max) {
    if (max >= 13000) return;
    max++;
    console.log(max);

    recursiva(max);
}
recursiva(0);