let solution = (i,j,k) => new Array(j-i+1).fill(0).map((_,ind)=>ind+i).map(v=>[...""+v].filter(a=>a==k).length).reduce((a,b)=>a+b,0)