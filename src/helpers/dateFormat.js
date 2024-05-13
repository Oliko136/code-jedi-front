export function formatDate(inputDate) {
    // Разбиваем строку даты по разделителю "-"
   const parts = inputDate.split("-");
    // Формируем новую дату в формате "дд/мм/гггг"
   const formatedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
    
    return formatedDate;
}
export function formatCurrentDate(date) {
   const year = date.getFullYear();
    // Получаем месяц и добавляем 1, так как в JavaScript месяцы нумеруются с 0
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    const day = date.getDate().toString().padStart(2, '0');
    
    return year + "-" + month + "-" + day;
}