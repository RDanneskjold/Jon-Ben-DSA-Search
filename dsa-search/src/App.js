import React from 'react';
import './App.css';

const search = require('./Search');
const tree = require('./BinarySearchTree');

function profit(arr) {
  let bestBuy = arr[0];
  let bestProfit = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] - bestBuy > bestProfit) {
      bestProfit = arr[i] - bestBuy;
    }

    if (arr[i] < bestBuy) {
      bestBuy = arr[i];
    }
  }

  return bestProfit;
}

function App() {
  const bst = new search();

  const dataStr = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
  const data = dataStr.split(' ').map(str => Number(str));
  const dataSort = data.sort();
  
  // orderStr = '4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90';
  // preStr = '25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90';
  // postStr = '4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25';
  


  const BST = new tree();

  BST.insert(25, 25);
  BST.insert(15, 15);
  BST.insert(50, 50);
  BST.insert(10, 10);
  BST.insert(24, 24);
  BST.insert(35, 35);
  BST.insert(70, 70);
  BST.insert(4, 4);
  BST.insert(12, 12);
  BST.insert(18, 18);
  BST.insert(31, 31);
  BST.insert(44, 44);
  BST.insert(66, 66);
  BST.insert(90, 90);
  BST.insert(22, 22);
  

  


  return(
    <>
      
      {bst.linearSearch(data, 72)}
      <br/>
      {bst.binarySearch(dataSort, 1)}
      <br/>
      {BST.inOrder()}
      <br />
      {BST.preOrder()}
      <br />
      {BST.postOrder()}
      <br />
      {BST.bfs()}
      <br />
      {profit([128, 97, 121, 123, 90, 97, 105])}
    </>
  );
}

export default App;
