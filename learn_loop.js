let index = 0;
const maxLength = 4;
                //contoh while
// while (index < maxLength) {
//   console.log(`index ke ${index}`);
//     index = index + 1;
// }

            //contoh do while

// do {
//     console.log(`index ke ${index}`);
//     index = index + 1;
// } while(index < maxLength);

            //contoh for
for (let nomor = 0; nomor <10; nomor++){
    if (nomor %2 == 0) {
    //console.log(`nomor ke ${nomor}`);
   // break;
   continue;
}
    console.log(`nomor ke ${nomor}`);
}