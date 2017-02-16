    function Node(left, right, parent, value){
        this.left = left;
        this.right = right;
        this.parent = parent;
        this.value = value;
    }

    function insert_to_binary_tree(root, node){
        if(root.value == null){
            return node;
        }
        var actualNode = root;
        var prevNode = null;
        while(true){
            if(actualNode.value > node.value){
                if(!actualNode.left){
                    actualNode.left = node;
                    node.parent = actualNode;
                    return root;
                }else{
                    actualNode = actualNode.left;
                }
            }else{
                if(!actualNode.right){
                    actualNode.right = node;
                    node.parent = actualNode;
                    return root;
                }else{
                    actualNode = actualNode.right;
                }
            }
        }

    }

    function create_binary_tree(numbers){
        var root = new Node(null,null,null,null);
        numbers.forEach(function(number){
            var node = new Node(null,null,null,number);
            //Aca se pasa por referencia entonces no creo que sea necesario eso, sin embargo lo haré asi.
            root = insert_to_binary_tree(root, node);
            console.log(root);
        });
        return root;
    }

    function view_structure(node){
        var queue = [node];
        var count = 0;
        var exp = 0;
        var string = "";
        while(queue.length != 0){
            count++;
            var node = queue.shift();
            string = string.concat(node.value);
            console.log(exp);
            if(Math.pow(2,exp) == count){
                 console.log(string);
                 string = "";
                 exp++;
                 count = 0;
            }
            console.log(string);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }