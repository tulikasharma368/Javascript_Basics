function volume(length) {
    return function(width) {
       return function(height) {
          console.log(length * width * height);
       }
    }
 }

//volume(10)(20)(30);


//  const res = volume(10);
//  const res1 = res(20);
//  const res2 = res1(30);
