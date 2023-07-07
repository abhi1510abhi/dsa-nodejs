
class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.back = 0;
    }

    push(data) {
        this.data[this.back] = data;
        ++this.back;
    }

    pop() {
        let pop_out_data = this.data[this.front];
        this.data[this.front] = null;
        ++this.front;
        if (this.front > this.back) {
            this.front = 0;
            this.back = 0; 
        }
        return pop_out_data;
    }
}

function createQueue() {
    return new Queue();
}

module.exports = {
    createQueue
}