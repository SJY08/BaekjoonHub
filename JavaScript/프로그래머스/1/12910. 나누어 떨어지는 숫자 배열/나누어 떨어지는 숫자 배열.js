let solution  = (a,d) => a.filter(v=>v%d ==0).length?a.filter(v=>v%d ==0).sort((a,b)=>a-b):[-1]