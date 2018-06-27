function main() {
  console.log('Hello World!');
}

function test() {
  const printString = 'Test it again';
  console.log(printString);
  alert('test!');
}

const getObj = {
  data() {
    return 'return an Object';
  },

  city: 'HangZhou',
};

const getSubject = () => 'get subject';

function showGroupDelete() {
  return (
    (this.selectedFiles.length > 0 && this.currentTab.id === 1) ||
    (this.currentTab.id === 2 && this.privilegeType === 2)
  );
}

export { main, test, getObj, getSubject, showGroupDelete };
