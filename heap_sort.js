function max_heapify(s,x){
    var l = 2*x;
    var r = 2*x + 1;
    var largest;
    if(l <= s.length && s[l]>s[x]){
        largest = l;
    }else{
        largest = x;
    }
    if(r<= s.length && s[r]>s[largest]){
        largest = r;
    }
    var temp;
    if(largest != x){
        temp = s[x];
        s[x] = s[largest];
        s[largest] = temp;
        s = max_heapify(s, largest);
    }
    return s;
}

function build_max_heap(s){
    for(var i = s.length/2; i>=0; i--){
        s = max_heapify(s,i);
    }
    return s;
}

function heap_sort(s){
    var length = s.length;
    s = build_max_heap(s);

    while(s.length>0){
        console.log(s[0]);
        s[0] = s[s.length-1];
        s.length = s.length -1;
        s = max_heapify(s,0);
    }

}