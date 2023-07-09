
class Queue {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    pop() {
        let pop_out_data = this.data.shift();
        return pop_out_data;
    }
}

function createQueue() {
    return new Queue();
}

module.exports = {
    createQueue
}