let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 document.write('<select id="phone-manufacturers">');

 for (let i = 0; i < manufacturers.length; i++) {
     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }

 document.write('</select>');