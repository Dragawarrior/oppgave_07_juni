const authorName = (firstname, middlename, lastname) => {
    const firstLetter = firstname.slice(0,1);
    const midLetter = middlename.slice(0,1);
    return `${firstLetter}. ${midLetter}.${lastname}`;
}
console.log(authorName("John", "Dwayne", "Watson"));