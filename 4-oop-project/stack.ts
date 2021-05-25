interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type Link = ListNode | null;

class ListNode {
  data: string;
  link: Link;

  constructor(data: string) {
    this.data = data;
    this.link = null;
  }
}

class Stacks implements Stack {
  size: number = 0;
  value: string;
  private prevNode: Link = null;

  push(value: string): void {
    const Node: ListNode = new ListNode(value);
    Node.link = this.prevNode;
    this.prevNode = Node;
    this.size++;
  }

  pop(): string {
    if (this.prevNode === null) {
      console.log("No item");
      return;
    } else {
      let data = this.prevNode.data;
      console.log(data);
      this.prevNode = this.prevNode.link;
      this.size--;
      return data;
    }
  }
}

const stack = new Stacks();
stack.pop(); // No item
stack.push("1");
stack.push("2");
stack.push("3");
stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
