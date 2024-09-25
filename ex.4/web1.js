let i=0;
function counting() {
    i=i+1
    const clock={
        'time': new Date(),
        'number': i
    };
    postMessage(clock);
    setTimeout("counting()", 1000);
}
counting();