let solution = (numbers,direction) => direction == "right" ? [numbers[numbers.length-1], ...numbers.slice(0,numbers.length-1)]:[...numbers.slice(1),numbers[0]]