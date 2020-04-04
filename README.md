## Ekşi Blocker

Ekşi blocker yazılarını görmek istemeyeceğiniz yazarları toplu olarak engelleme/başlıklarını engellemek için hazırlanmış bir chrome eklentisidir. Eklenti engellenecek yazar listesini bu [adressten](https://raw.githubusercontent.com/anonmonogatari/eksiengelle/master/yazarlist.txt) alır. Liste ilk etapta ekşi sözlükteki [başlıkları engellenecek büyük aktroll listesi](https://eksisozluk.com/basliklari-engellenecek-buyuk-aktroll-listesi--5229083) en çok şükele alan ilk 5 mesajtan derlenmiş olup zaman içinde yanlışlıkları ve eksiklikleri düzeltilerek mükemmelleştirilecektir.

Derlenen yazar listesi [useridpicker.py](https://github.com/anonmonogatari/eksiengelle/blob/master/useridpicker.py) isimli python scripti ile ekşi sözlük kullanıcı idlerine dönüştürülür ve [yazarid.txt](https://github.com/anonmonogatari/eksiengelle/blob/master/yazarid.txt) olarak saklanır. 

Oluşturmuş olduğumuz chrome extension'ın amacı [yazarid.txt](https://github.com/anonmonogatari/eksiengelle/blob/master/yazarid.txt)'nin barındırdığı idleri kullanarak ekşi sözlük'e engelleme/başlıklarını engelleme isteği yollamaktır.