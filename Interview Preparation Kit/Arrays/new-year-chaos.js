function minimumBribes(queue) {
    var max = 0;

    // we need to use for because we sometimes break out of the loop before going
    // through all items
    for (var i = 0; i < queue.length; i++) {
        if (queue[i] > i + 3) {
            console.log("Too chaotic");
            return;
        }
        // by selecting the correct index 2 positions before the current item, we reduce
        // the number of operations significantly which makes it run faster
        for (var j = Math.max(0, queue[i] - 2); j < i + 1; j++) {
            if (queue[j] > queue[i]) {
                max++;
            }
        }
    }
    console.log(max);
}
