const parseCode = (str) => {
  // your code here
	  let a = {
  }
  let arr = [];
  let ct = 0;
  let f = "";
  for(let i = 0;i<str.length;i++) {
    if(str.charAt(i)!=='0') {
      f+= str.charAt(i);
    }
    else {
      if(f.length>0) {
        arr.push(f);
      }
      ct = i;
      f = "";
    }
  }
  a.firstName = arr[0];
  a.lastName = arr[1];
  a.id = str.slice(ct+1,str.length); 
  return a;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
