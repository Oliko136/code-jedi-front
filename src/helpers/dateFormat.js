export function formatDate(inputDate) {
   const date = new Date(inputDate);
    // Получаем день, месяц и год из объекта Date
 let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1; 
    let year = date.getUTCFullYear();
    // Форматируем день и месяц, чтобы добавить ведущий ноль, если нужно
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    // Формируем итоговую строку в нужном формате
    var formattedDate = day + "/" + month + "/" + year;
    
    return formattedDate;
}
export function formatCurrentDate(date) {
   const year = date.getFullYear();
    // Получаем месяц и добавляем 1, так как в JavaScript месяцы нумеруются с 0
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    const day = date.getDate().toString().padStart(2, '0');
    
    return year + "-" + month + "-" + day;
}

export function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}