let info = prompt('Adınızı Giriniz')
let userName = document.querySelector('#myName')
userName.innerHTML = info




// tarih ve saat oluşturmak ve yazdırmak
setInterval(myTimer, 1000); 
function myTimer() {   // bu iki satır saatin ilerlemesi için yazılan fonksiyondur

    const now = new Date() // tarih işlemleri için date tanımlaması bu şekilde yapılmalıdır.
    
    let year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        day = now.getDay(),
        hour = now.getHours(),
        minute = now.getMinutes(), 
        second = now.getSeconds()// yıl, gün , ay saat gibi gerekli olan bilgileri tanımladık.
    
        hour = hour < 10 ? '0' + hour : hour
        minute = minute < 10 ? '0' + minute : minute
        second = second < 10 ? '0' + second : second // 10 dan küçük ise sıfır eklemesi yapar
    
    

    // ay ve gün bize sayı olarak döner. bu nedenle dizi oluşturduk. dizi elemanlarını kullanarak yazdıracağız.
    let monthstil = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım',       'Aralık']

    let daystil = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    
    
    // sonuç olarak yukarıdaki tanımları kullanarak sayfaya yazdırıyoruz
    let fullDate = document.querySelector('#myDate') // tarihi yazdıracağımız yeri tanımladık.
    fullDate.innerHTML= `${date} ${monthstil[month]} ${year} ${daystil[day]}` 

    
    let fullclock = document.querySelector('#myClock')
    fullclock.innerHTML = `${hour} : ${minute} : ${second}`
    
     
}
let body = document.querySelector('#body')
body.classList.add('color')