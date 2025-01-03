> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# TypeScript: Wprowadzenie

Twoim zadaniem będzie stworzenie kilku pomocniczych funkcji, które będą umożliwiać zarządzanie produktami zapisanymi w formie tupli.

```
type ProductTuple = [name: string, category: string, price: number, isAvailable: boolean, sales: number];
```

Powyższy zapis oznacza, że pod nazwą `ProductTuple` znajduje się konkretna struktura - o samym `type` będziemy mówić w kolejnym materiale. Na razie wystarczy Ci powyższa informacja.

Teraz tworzymy tablicę elementów, które są zgodne ze wcześniej zdefiniowanym typem tj.

```
let products: ProductTuple[] = [
  ["Smartfon", "Elektronika", 3000, true, 11],
  ["Laptop", "Elektronika", 6000, false, 15],
  ["T-shirt", "Odzież", 50, true, 13],
  ["Bluza", "Odzież", 150, false, 99],
  ["Lodówka", "AGD", 2000, true, 22],
];
```

> Zwróć uwagę, że zapis `ProductTuple[]` oznacza tablicę, której każdy z elementów jest zgodny z `ProductTuple`

Teraz Twoim zadaniem będzie opracowanie:
- funkcji, która zwraca tablicę tupli produktów dostępnych w magazynie.
- funkcji, która przyjmuje nazwę kategorii i zwraca tablicę tupli produktów w tej kategorii.
- funkcji, która przyjmuje nazwę kategorii i zwraca średnią cenę produktów z tej kategorii.
- funkcji, ktora sortuje produkty rosnąco i malejąco na podstawie nazwy, popularności oraz ceny z danej kategorii w zależności od wartości podanych w parametrach


## Zadanie dodatkowe

Zmień obsługę "kategorii" ze `string`-a na `enum`-y z konkretną wartością, aby była to skończona lista elementów. Wprowadź niezbędne zmiany w funkcjach, aby działały prawidłowo. 

&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
