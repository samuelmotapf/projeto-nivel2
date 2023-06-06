

new Vue({
  el: '#app',
  data: {
    numbers: [],
    newNumber: '',
    sortingAlgorithm: ''
  },
  methods: {
    addNumber() {
      if (this.newNumber !== '') {
        this.numbers.push(Number(this.newNumber));
        this.newNumber = ''; // Limpa o campo de entrada após adicionar o valor à lista
      }
    },
    clearNumbers() {
      this.numbers = [];
    },
    sortNumbers() {
      if (this.sortingAlgorithm === 'bubbleSort') {
        this.bubbleSort();
      } else if (this.sortingAlgorithm === 'selectionSort') {
        this.selectionSort();
      } else if (this.sortingAlgorithm === 'quickSort') {
        this.quickSort(this.numbers, 0, this.numbers.length - 1);
      }
      // Atualiza a lista de números após a ordenação
      this.numbers = [...this.numbers];
    },
    bubbleSort() {
      let len = this.numbers.length;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
          if (this.numbers[i] > this.numbers[i + 1]) {
            let temp = this.numbers[i];
            this.numbers[i] = this.numbers[i + 1];
            this.numbers[i + 1] = temp;
            swapped = true;
          }
        }
        len--;
      } while (swapped);
    },
    selectionSort() {
      let len = this.numbers.length;
      for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
          if (this.numbers[j] < this.numbers[minIndex]) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          let temp = this.numbers[i];
          this.numbers[i] = this.numbers[minIndex];
          this.numbers[minIndex] = temp;
        }
      }
    },
    quickSort(arr, left, right) {
      if (left < right) {
        let pivot = this.partition(arr, left, right);
        this.quickSort(arr, left, pivot - 1);
        this.quickSort(arr, pivot + 1, right);
      }
    },
    partition(arr, left, right) {
      let pivot = arr[right];
      let i = left - 1;
      for (let j = left; j <= right - 1; j++) {
        if (arr[j] < pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      let temp = arr[i + 1];
      arr[i + 1] = arr[right];
      arr[right] = temp;
      return i + 1;
    },
    shuffleNumbers() {
      let currentIndex = this.numbers.length;
      let temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = this.numbers[currentIndex];
        this.numbers[currentIndex] = this.numbers[randomIndex];
        this.numbers[randomIndex] = temporaryValue;
      }
      // Atualiza a lista de números após a mistura
      this.numbers = [...this.numbers];
    }
  }
});
 