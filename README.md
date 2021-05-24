# Customowy Slider wraz z bardzo prostą stroną wizytówkową

Sam Slider został zaprojektowany z myślą, aby móc go wykorzystywać w przyszłości. Strona wizytówkowa została zrobiona pośpiesznie tylko aby móc pokazać slajder w użyciu i nie odzwierciedla ona pełni umiejętności, gdyż Slider był głównym celem projektu. Do stworzenia całego projektu została wykorzystana tylko biblioteka "prop-types" do sprawdzania typów przyjętych propów oraz wbudowana biblioteka lodash {debounce} do odwlekania wywołania funkcji, cała reszta została stworzona samodzielnie. Slider zawiera w sobie takie dość przydatne opcje jak:

### Kropki

Kropki pokazują ilość slajdów oraz pełnią funkcję przycisku, który przenosi nas do wybranego slajdu. Możemy je włączyć bądź wyłączyć za pomocą prop _showDots_. Domyślną wartością jest: true.

### Strzałki

Za pomocą strzałek możemy zmieniać slajdy. Jezeli nie został nam ani jeden slajd z lewej bądź prawej strony to dana strzałka się wyłączy. Możemy je włączyć bądź wyłączyć za pomocą prop _showArrows_. Domyślną wartościa jest: true;

### Decydowanie o ilosci komponentów na dany slajd

Mamy możliwość wpisania poprzez prop _amountOfItemsOnSlide_ ile podanych komponentów może znajdować się na jednym slajdzie. Na podstawie podanej wartości oraz ilości komponentów funkcja sliderCalculations() zwróci odpowiednią tablicę w której każdym elementem będzie kolejna tablica o długości _amountOfItemsOnSlide_. Domyślną wartością jest: 1;

### Autoodtwarzanie

**(Opcja niestabilna)**

Możemy zainicjować przesuwanie się Slidera automatycznie za pomocą prop _autoPlay_. Domyślną wartością jest: false. Częstotliwość przesuwania się kolejnych slajdów możemy zmienić za pomoca prop _autoPlaySpeed_, która przyjmuje wartość w milisekundach. Domyślną wartością jest: 5000 (5 sekund).

### Przesuwanie slajdera za pomocą gestów

Slider możemy przesuwać za pomocą gestów przesuwania palcem po ekranie. Funkcja przydatna głównie dla użytkowników mobilnych. Zawsze zainicjowana bez możliwości wyłączenia. (Możliwa do wykorzystania tylko na urządzeniach mobilnych).
